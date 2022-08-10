import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [input, setInput] = React.useState("");
  const [todoItems, setTodoItems] = React.useState([]);
  const [local, setLocal] = useLocalStorage(`todoItems`, ``);
  const [count, setCount] = React.useState(0);
  const [itemId, setItemId] = useLocalStorage(`itemId`, `${count}`);

  return (
    <GlobalContext.Provider
      value={{
        useLocalStorage,
        input,
        setInput,
        todoItems,
        setTodoItems,
        local,
        setLocal,
        count,
        setCount,
        itemId,
        setItemId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
