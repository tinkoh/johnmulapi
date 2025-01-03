package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"math/rand"
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

	data := make([]string, parameters.quantity)

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

func main() {
	data := readQuotesFromFile()

	for i := range data {
		println(data[i])
	}
}
