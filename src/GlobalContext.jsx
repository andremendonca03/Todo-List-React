import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [input, setInput] = React.useState("");
  const [todoItem, setTodoItem] = React.useState([]);
  const [count, setCount] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{ useLocalStorage, input, setInput, todoItem, setTodoItem, count, setCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
