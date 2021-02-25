import React, { useContext } from "react";
import { sectionsFlags } from "./consts.js";
import useHandlers from "./handlers.js";

const Context = React.createContext();
export default function useDefineAction() {
  return useContext(Context);
}

export const DefineActionProvider = ({ children }) => {

  const { switchSection } = useHandlers();

  const defineAction = action => {

    if (sectionsFlags.includes(action)) {
      switchSection(action);
    }

  };

  return (
    <Context.Provider value={{defineAction}}>
      {children}
    </Context.Provider>
  );
};