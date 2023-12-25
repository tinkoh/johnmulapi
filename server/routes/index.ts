import { $URL } from "ufo";
import _quotes from "../../quotes/quotes.min.json";

export interface Request {
  quantity?: number;
  unique?: boolean;
}

export interface Response {
  data: string[];
  status: 200 | 400 | 500;
  message: string | null;
}
export function fetch({
  quantity = 1,
  unique = false,
}: Request = {}): Response {
  const data: string[] = [];
  const quotes: string[] = [..._quotes];

  console.log(quotes.length);

  try {
    if (quantity < 0)
      return {
        data,
        status: 400,
        message: "You requested a negative amount of quotes my dude.",
      };

    if (unique) {
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
    }

    while (data.length < quantity) {
      data.push(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    return {
      data,
      status: 200,
      message: null,
    };
  } catch ({ message = null }: any) {
    return {
      data,
      status: 500,
      message,
    };
  }
}

interface H3Event {
  path: string;
}

export default function eventHandler(event: H3Event) {
  const query = new $URL(event.path).query;
  return fetch({ ...query });
}
