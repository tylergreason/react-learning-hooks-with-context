import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  a: 1,
  b: 2,
  c: 3,
  list: [10, 20, 30],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
