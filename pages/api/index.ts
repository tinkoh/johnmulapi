import type { NextApiRequest, NextApiResponse } from 'next'
import allQuotes from '../../quotes/quotes-min.js'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { 
        quantity, maxLength, minLength
    } = req.query

    const getQuote = () => {
        let quotes: string[] = allQuotes

        // Filter quotes by optional max/min length parameters
        if (maxLength && Number(maxLength)) quotes = quotes.filter(quote => quote.length <= Number(maxLength))
        if (minLength && Number(minLength)) quotes = quotes.filter(quote => quote.length >= Number(minLength))

        // Get array of random indices of quotes
        // @ts-ignore
        const indices = Array(quotes.length).fill().map((_, index) => index + 1)
        indices.sort(() => Math.random() - 0.5)

        // If no quantity provided, use first random index
        if (!quantity || !Number(quantity)) {
            if (!(quotes.length > 0 && indices.length > 0)) return ""
            return quotes[indices[0]]
        }
        // Else get array of random indices of length quantity
        const randIndices = indices.slice(0, Number(quantity))
        // @ts-ignore
        // Return array of quotes of those indices
        return Array(Number(quantity)).fill()
            .map((_, index) => quotes[randIndices[index]] && quotes[randIndices[index]])
            // Filter out nulls
            .filter(item => { if (item) return item })
    }

    res.status(200).json({ 
        data: getQuote() 
    })
}
