import React, { createContext, useReducer } from "react";

const contextWrapper = (contextName, initialState, reducer, Types) => {
  const Context = createContext(initialState);

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
      [contextName + "State"]: state,
      [contextName + "Dispatch"]: dispatch,
      [contextName + "Types"]: Types
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

export default contextWrapper;
