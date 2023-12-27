import { useState, useRef, useContext, createContext, type Context } from "react";
import { fetch as fetch_ } from "../../../../server/routes";

const MulaneyQuoteContext = createContext<QuoteContext | null>(null)

interface QuoteContext {
  quote: string | null,
  fetch: () => void,
  delayedFetch: (delay?: number) => Promise<unknown>,
  subscribe: (fn: () => unknown) => void
}

export const MulaneyQuoteProvider: React.FC<{ children: React.ReactNode}> = ({ ...props }) => {

  const {
    data: [data],
  } = fetch_();
  const [quote, setQuote] = useState<string | null>(data);

  const subscribers = useRef<(() => unknown)[]>([])

  const subscribe = (fn: () => unknown) => {
    subscribers.current = [...subscribers.current, fn]
  }

  const fetch = () => {
    const {
      data: [data],
    } = fetch_();

    setQuote(data);
    subscribers.current.forEach(fn => fn())
  };

  const delayedFetch = async (delay: number = 500) => {
    let sleepTimeout = useRef<NodeJS.Timeout | null>(null);
    
    if (sleepTimeout.current) clearTimeout(sleepTimeout.current)

    setQuote(null);

    await new Promise((resolve, _reject) => {
      sleepTimeout.current = setTimeout(resolve, delay);
    });

    fetch()
  };

  return (
    <MulaneyQuoteContext.Provider value={{ quote, fetch, delayedFetch, subscribe }}>
      {props.children}
    </MulaneyQuoteContext.Provider>
  )
}

const useMulaneyQuote = () => useContext(MulaneyQuoteContext as Context<QuoteContext>)

export default useMulaneyQuote;
