package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"math"
	"math/rand"
	"net/http"
	"net/url"
	"strconv"
)

// Returns a []string containing all of the quotes
// in quotes/quotes.json
func readQuotesFromFile() []string {
	dump, err := ioutil.ReadFile("../quotes/quotes.json")
	if err != nil {
		log.Fatal(err)
	}

	var data []string
	err = json.Unmarshal(dump, &data)
	if err != nil {
		log.Fatal(err)
	}

	return data
}

// Parameters of the API
//
// Example: ?maxLength=30&unique=true
type APIParameters struct {
	quantity  int
	maxLength int
	minLength int
	unique    bool
}

// Swap two elements in an array
func swap[T any](arr []T, a int, b int) []T {
	tmp := arr[a]
	arr[a] = arr[b]
	arr[b] = tmp

	return arr
}

// Filter elements in an array by some condition
func filter[T any](arr []T, f func(T) bool) []T {
	n := 0
	for i := range arr {
		if f(arr[i]) {
			arr[n] = arr[i]
			n++
		}
	}

	return arr[:n]
}

// Filters []string to meet parameters
func filterQuotesByParameters(quotes []string, parameters APIParameters) ([]string, error) {
	if parameters.quantity > len(quotes) {
		return nil, errors.New("not enough quotes my dude")
	}

	// Filter quotes by max/min length
	quotes = filter(quotes, func(quote string) bool {
		if len(quote) > parameters.maxLength {
			return false
		}

		if len(quote) < parameters.minLength {
			return false
		}

		return true
	})

	if parameters.quantity > len(quotes) {
		return nil, errors.New("not enough quotes matching your length requirements my dude")
	}

	var data []string

	if parameters.unique {
		for range parameters.quantity {
			i := rand.Intn(len(quotes))
			quote := quotes[i]
			data = append(data, quote)

			// Remove chosen quote by swapping to end and slicing it off
			swap(quotes, i, len(quotes)-1)
			quotes = quotes[:len(quotes)-1]
		}
	} else {
		for range parameters.quantity {
			quote := quotes[rand.Intn(len(quotes))]
			data = append(data, quote)
		}
	}

	return data, nil
}

// Create APIParameters off of a URL query
func parseQueryIntoParameters(query url.Values) (APIParameters, error) {
	parameters := APIParameters{
		quantity:  1,
		maxLength: math.MaxInt,
		minLength: math.MinInt,
		unique:    false,
	}

	var err error

	if query.Has("quantity") {
		parameters.quantity, err = strconv.Atoi(query.Get("quantity"))
	}

	if query.Has("maxLength") {
		parameters.maxLength, err = strconv.Atoi(query.Get("maxLength"))
	}

	if query.Has("minLength") {
		parameters.minLength, err = strconv.Atoi(query.Get("minLength"))
	}

	if query.Has("unique") {
		parameters.unique, err = strconv.ParseBool(query.Get("unique"))
	}

	return parameters, err
}

func main() {
	quotes := readQuotesFromFile()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.Error(w, "not found fam", 404)
			return
		}

		query, err := url.ParseQuery(r.URL.RawQuery)
		if err != nil {
			http.Error(w, "bad request fam", http.StatusBadRequest)
			return
		}

		parameters, err := parseQueryIntoParameters(query)
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnprocessableEntity)
			return
		}

		filteredQuotes, err := filterQuotesByParameters(quotes, parameters)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		data, err := json.Marshal(filteredQuotes)
		if err != nil {
			http.Error(w, "something went wrong", http.StatusInternalServerError)
		}

		fmt.Fprintf(w, "%s", bytes.NewBuffer(data))
	})

	log.Println("Starting server on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
