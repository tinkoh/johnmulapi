import { useState } from "react";

type Clipboard = string | null;
type Copy = (text: string) => Promise<boolean>;

export default function useCopyToClipboard(): [Clipboard, Copy] {
  const [clipboard, setClipboard] = useState<Clipboard>(null);

  const copy: Copy = async (text) => {
    if (!navigator?.clipboard) {
      throw new Error("Clipboard not supported");
    }

    try {
      await navigator.clipboard.writeText(text);
      setClipboard(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setClipboard(null);
      return false;
    }
  };

  return [clipboard, copy];
}
