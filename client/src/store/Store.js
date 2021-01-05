import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  openedPorts: null,
  error: null,
  loading: false,
  results: false,
  host: null,
  portsDesc: [
    {
      port: 20,
      portDesc: "File Transfer Protocol",
    },
    {
      port: 21,
      portDesc: "File Transfer Protocol",
    },
    {
      port: 22,
      portDesc: "Secure Shell",
    },
    {
      port: 25,
      portDesc: "Simple Mail Transfer Protocol",
    },
    {
      port: 80,
      portDesc: "Hypertext Transfer Protocol",
    },
    {
      port: 443,
      portDesc: "Hypertext Transfer Protocol Secure",
    },
    {
      port: 445,
      portDesc: "Microsoft-DS",
    },
    {
      port: 515,
      portDesc: "Line Printer Daemon",
    },
  ],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
