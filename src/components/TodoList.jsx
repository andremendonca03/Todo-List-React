import React from "react";
import { GlobalContext } from "../GlobalContext";

const TodoList = () => {
  const global = React.useContext(GlobalContext);

  function handleCheck({ target }) {
    const actualItem = target.parentElement;
    const checked = () => {
      if (actualItem.getAttribute("data-checked") === "true") {
        return true;
      } else {
        return false;
      }
    };

    global.setTodoItems((prev) => {
      prev.forEach((item) => {
        if (item.id === Number.parseInt(actualItem.getAttribute("id"))) {
          item.checked = !checked();
        }
      });

      return [...global.todoItems];
    });
  }

  function handleDelete({ target }) {
    const actualItem = target.parentElement;

    global.setTodoItems((prev) => {
      const arrayReduced = prev.reduce((acc, item) => {
        if (item.id !== Number.parseInt(actualItem.getAttribute("id"))) {
          return acc.concat([item]);
        } else {
          return acc;
        }
      }, []);
      console.log(arrayReduced);
      return [...arrayReduced];
    });
  }

  React.useEffect(() => {
    const emptyCheck = window.setInterval(() => {
      if (!global.todoItems[0]) {
        global.setCount(0);
      }
    }, 1);
    return () => {
      window.clearInterval(emptyCheck);
    }
  }, [global.todoItems]);

  return (
    <ul className="list">
      {global.todoItems.map((item) => {
        return (
          <li
            key={item.id}
            id={item.id}
            className="list-item"
            data-checked={item.checked}
          >
            <span className="list-item-detail"></span>
            <span className="list-item-check" onClick={handleCheck}></span>
            <p className="list-item-text">
              {item.text}
            </p>
            <span className="list-item-delete" onClick={handleDelete}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
