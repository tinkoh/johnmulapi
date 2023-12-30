import { ClipboardProvider } from "./useCopyToClipboard";
import { MulaneyQuoteProvider } from "./useMulaneyQuote";
import { ViewProvider } from "./useView";

const Contexts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClipboardProvider>
      <MulaneyQuoteProvider>
        <ViewProvider>{children}</ViewProvider>
      </MulaneyQuoteProvider>
    </ClipboardProvider>
  );
};

export default Contexts;
