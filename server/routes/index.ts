import { $URL } from "ufo";
import fetch from "../../quotes/fetch";

export default eventHandler((event) => {
  const query = new $URL(event.path).query;
  return fetch({ ...query });
});
