import React from "react";
import SelectTheme from "./SelectTheme";
import InputField from "./InputField";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <main className="main todo-container">
      <h1 className="todo-title">ToDo List</h1>

      <SelectTheme />
      <InputField />
      <TodoList />
    </main>
  );
};

export default TodoContainer;
