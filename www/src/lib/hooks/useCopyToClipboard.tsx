import { useState, useContext, createContext } from "react";

const ClipboardContext = createContext<Context | null>(null);

export interface Context {
  clipboard: string | null;
  copy: (text: string) => Promise<void>;
}

export const ClipboardProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children, ...props }) => {
  const [clipboard, setClipboard] = useState<Context["clipboard"]>(null);

  const copy: Context["copy"] = async (text) => {
    if (!navigator?.clipboard) {
      throw new Error("Clipboard not supported");
    }

    try {
      await navigator.clipboard.writeText(text).then(() => setClipboard(text));
    } catch (error) {
      console.warn("Copy failed", error);
      setClipboard(null);
    }
  };

  return (
    <ClipboardContext.Provider value={{ clipboard, copy }} {...props}>
      {children}
    </ClipboardContext.Provider>
  );
};

export default function useClipboard() {
  const ctx = useContext(ClipboardContext);

  if (!ctx) throw new Error("No context found for useClipboard hook");
  return ctx;
}
