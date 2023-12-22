import _quotes from "./quotes.min.json";

export interface Request {
  quantity?: number;
  unique?: boolean;
}

export interface Response {
  data: string[];
  status: 200 | 400 | 500;
  message: string | null;
}

export default function ({
  quantity = 1,
  unique = false,
}: Request = {}): Response {
  const data: string[] = [];
  const quotes: string[] = _quotes;

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
        const [quote] = quotes.splice(
          Math.floor(Math.random() * quotes.length)
        );
        data.push(quote);
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
  } catch ({ message }) {
    return {
      data,
      status: 500,
      message,
    };
  }
}
