import type { NextApiRequest, NextApiResponse } from 'next'
import allQuotes from '../../quotes/quotes.min.json'

export type ResType = {
    data: string | string[] | null
}

export type ReqType = {
    quantity?: string,
    maxLength?: string,
    minLength?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResType>
) {
    const { 
        quantity, maxLength, minLength
    } = req.query as ReqType

    const getQuote = (): ResType["data"] => {
        let quotes: string[] = allQuotes

        // Filter quotes by optional max/min length parameters
        if (maxLength && Number(maxLength)) {
            quotes = quotes.filter(quote => quote.length <= Number(maxLength))
        }
        if (minLength && Number(minLength)) {
            quotes = quotes.filter(quote => quote.length >= Number(minLength))
        }

        // If there are no quotes in that range, return null
        if (!(quotes.length > 0)) {
            return null
        }

        // If no quantity provided, use first random index
        if (!quantity || !Number(quantity)) {
            return quotes[Math.floor(Math.random() * quotes.length)]
        }

        // Else loop over quantity to get that many unique indices
        const randIndices: number[] = []
        let i = 0
        while (i < Number(quantity)) {
            let randomIndex = Math.floor(Math.random() * quotes.length)

            if (!randIndices.includes(randomIndex)) {
                randIndices.push(randomIndex)
                i++
            }
        }

        // Return array of quotes of those indices
        return [...Array(Number(quantity))]
            .map((_, i) => {
                return quotes[randIndices[i]]
            })
            // Filter out nulls
            .filter(quote => !!quote)
    }

    res.status(200).json({ 
        data: getQuote() 
    })
}
