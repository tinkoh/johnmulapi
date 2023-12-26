import { $URL, type QueryObject } from "ufo";
import Filter from "bad-words";
import _quotes from "../../quotes/quotes.min.json";

export interface Request {
  quantity?: number;
  unique?: boolean;
  minLength?: number;
  maxLength?: number;
  censor?: boolean;
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
export function fetch({
  quantity = 1,
  unique = false,
  minLength = undefined,
  maxLength = undefined,
  censor = false,
}: Request = {}): Response {
  let data: string[] = [];
  let quotes: string[] = [..._quotes];
  const filter = new Filter();
  
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

      if (censor === true) data = data.map((quote) => filter.clean(quote));

      return {
        data,
        status: 200,
        message: null,
      };
    } else {
      if (quotes.length === 0)
        return {
          data,
          status: 400,
          message: "I ran out of quotes within the restrictions you set.",
        };

      while (data.length < quantity) {
        data.push(quotes[Math.floor(Math.random() * quotes.length)]);
      }

      if (censor === true) data = data.map((quote) => filter.clean(quote));

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

function parseQuery(query: QueryObject) {
  const parsed: QueryObject = {};

  for (const key in query) {
    if (query[key] === "true") {
      parsed[key] = true;
    } else if (query[key] === "false") {
      parsed[key] = false;
    } else if (!isNaN(Number(query[key]))) {
      parsed[key] = Number(query[key]);
    } else {
      parsed[key] = query[key];
    }
  }
  return parsed;
}

export default function eventHandler(event: { path: string }) {
  const query = new $URL(event.path).query;
  const parsedQuery = parseQuery(query);
  console.log(parsedQuery);
  return fetch({ ...parsedQuery });
}

export const __Filter__ = Filter;
