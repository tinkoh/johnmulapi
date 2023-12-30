import { useState, useContext, createContext, type Context } from "react";

export enum ViewEnum {
  HOW_TO_USE,
  QUOTE_LIST,
}

export interface View {
  view: ViewEnum | null;
  setView: (view: ViewEnum | null) => void;
}

const ViewContext = createContext<View | null>(null);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  const [view, setView] = useState<ViewEnum | null>(null);

  const setView_ = (view: ViewEnum | null) => {
    setView(view);
  };

  return (
    <ViewContext.Provider value={{ view, setView: setView_ }} {...props}>
      {children}
    </ViewContext.Provider>
  );
};

const useView = () => {
  const context = useContext(ViewContext as Context<View | null>);

  if (!context) throw new Error("No context found for useView hook");
  return context;
};

export default useView;
