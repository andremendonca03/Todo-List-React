import React from "react";
import { GlobalStorage } from "./GlobalContext";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <GlobalStorage>
      <TodoContainer />
    </GlobalStorage>
  );
};

export default App;
