import React, { useContext } from "react";
import { sectionsFlags, close} from "./consts.js";
import useHandlers from "./handlers.js";

const Context = React.createContext();
export default function useDefineAction() {
  return useContext(Context);
}

export const DefineActionProvider = ({ children }) => {

  const { 
    switchSection,
    closeSections,
  } = useHandlers();

  const defineAction = action => {

    if (sectionsFlags.includes(action)) {
      switchSection(action);
    }
    switch (action) {
      case close:
        closeSections();
        break;

      default:
        break;
    }
  };

  return (
    <Context.Provider value={{defineAction}}>
      {children}
    </Context.Provider>
  );
};