import { $URL, type QueryObject } from "ufo";
import fetch from "../fetch";

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

  return fetch({ ...parsedQuery });
}
