import { useState, useRef, useContext, createContext, type Context } from "react";
import { fetch } from "../../../../server/routes";

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
  } = fetch();
  const [quote, setQuote] = useState<string | null>(data);

  const subscribers = useRef<(() => unknown)[]>([])

  const subscribe = (fn: () => unknown) => {
    subscribers.current = [...subscribers.current, fn]
  }

  const fetch_ = () => {
    const {
      data: [data],
    } = fetch();

    setQuote(data);
    subscribers.current.forEach(fn => fn())
  };

  let sleepTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const delayedFetch = async (delay: number = 500) => {
    
    if (sleepTimeout.current) clearTimeout(sleepTimeout.current)

    setQuote(null);

    await new Promise((resolve, _reject) => {
      sleepTimeout.current = setTimeout(resolve, delay);
    });

    const {
      data: [data],
    } = fetch();

    setQuote(data);
    subscribers.current.forEach(fn => fn())
  };

  return (
    <MulaneyQuoteContext.Provider value={{ quote, fetch: fetch_, delayedFetch, subscribe }}>
      {props.children}
    </MulaneyQuoteContext.Provider>
  )
}

const useMulaneyQuote = () => {
  const context = useContext(MulaneyQuoteContext as Context<QuoteContext>)

  if (!context) throw new Error("No context found for useMulaneyQuote hook")
  return context
}

export default useMulaneyQuote;
