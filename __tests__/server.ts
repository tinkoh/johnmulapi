import { fetch } from "../server/routes";
import "jest";

describe("fetch", () => {
  it("returns the requested number of quotes", () => {
    const response = fetch({ quantity: 5 });
    expect(response.data.length).toBe(5);
    expect(response.status).toBe(200);
  });

  it("returns unique quotes when requested", () => {
    const response = fetch({ quantity: 5, unique: true });
    const uniqueQuotes = new Set(response.data);
    expect(uniqueQuotes.size).toBe(5);
    expect(response.status).toBe(200);
  });

  it("returns an error when a negative quantity is requested", () => {
    const response = fetch({ quantity: -5 });
    expect(response.status).toBe(400);
  });

  it("returns an error when more unique quotes are requested than available", () => {
    const response = fetch({ quantity: 10000, unique: true }); // assuming _quotes.length < 10000
    expect(response.status).toBe(400);
  });
});
