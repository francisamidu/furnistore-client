import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

const AppContext = createContext<{
  name: string;
  year: number;
}>({ name: "", year: 0 });

const AppProvider = ({ children }: PropsWithChildren<Partial<ReactNode>>) => {
  const [appData, setAppData] = useState({
    name: "Furnistore",
    year: new Date().getFullYear(),
  });

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

const useApp = () => useContext(AppContext);
export { AppProvider, useApp };
