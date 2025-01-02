package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
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

// Filters []string to meet parameters
func filterQuotesByParameters(quotes []string, parameters APIParameters) error {
	if parameters.quantity > len(quotes) {
		return errors.New("not enough quotes my dude")
	}

	return nil
}

func main() {
	data := readQuotesFromFile()

	for i := range data {
		println(data[i])
	}
}
