import quotes_ from "../quotes/quotes.min.json";

export interface Request {
  quantity?: number;
  unique?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface Response {
  data: string[];
  status: 200 | 400 | 500;
  message: string | null;
}

/**
 * Fetches a list of quotes based on the provided parameters.
 * @param {Request} request - The request parameters.
 * @returns {Response} The response containing the quotes and status.
 */
export default function fetch({
  quantity = 1,
  unique = false,
  minLength = undefined,
  maxLength = undefined,
}: Request = {}): Response {
  const data: string[] = [];
  let quotes: string[] = [...quotes_];

  try {
    if (quantity < 0)
      return {
        data,
        status: 400,
        message: "You requested a negative amount of quotes my dude.",
      };

    if (minLength)
      quotes = [...quotes.filter((quote) => quote.length >= minLength)];
    if (maxLength)
      quotes = [...quotes.filter((quote) => quote.length <= maxLength)];

    if (quotes.length === 0)
      return {
        data,
        status: 400,
        message: "I ran out of quotes within the restrictions you set.",
      };

    if (unique === true) {
      if (quantity > quotes.length)
        return {
          data,
          status: 400,
          message: "You requested more unique quotes than I can offer.",
        };

      while (data.length < quantity) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        data.push(quote);
        quotes.splice(randomIndex, 1);
      }

      return {
        data,
        status: 200,
        message: null,
      };
    } else {
      while (data.length < quantity) {
        data.push(quotes[Math.floor(Math.random() * quotes.length)]);
      }

      return {
        data,
        status: 200,
        message: null,
      };
    }
  } catch ({ message = null }: any) {
    return {
      data,
      status: 500,
      message,
    };
  }
}
