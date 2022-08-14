import React from "react";
import { GlobalContext } from "../GlobalContext";

const InputField = () => {
  const global = React.useContext(GlobalContext);

  function handleChange({ target }) {
    global.setInput(target.value);
  }

  function handleKey({ key }) {
    if (key === "Enter") handleClick();
  }

  function handleClick() {
    if (global.input) {
      global.setTodoItems([
        {
          text: global.input,
          id: global.count,
          checked: false,
        },
        ...global.todoItems,
      ]);
      global.setCount((prev) => prev + 1);
      global.setInput("");
    }
  }

  React.useEffect(() => {
    const getLocal = (key) => window.localStorage.getItem(key);

    if (getLocal("todoItems") && getLocal("todoItems") !== "[]") {
      global.setTodoItems(JSON.parse(getLocal("todoItems")));
    }
    if (getLocal("itemId")) {
      global.setCount(Number.parseInt(getLocal("itemId")));
    }
  }, []);

  React.useEffect(() => {
    global.setLocal(JSON.stringify(global.todoItems));
    global.setItemId(global.count);
  }, [global.todoItems, global.itemId]);

  return (
    <div className="input">
      <input
        type="text"
        className="input-field"
        id="inputField"
        value={global.input}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <button className="input-btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default InputField;
