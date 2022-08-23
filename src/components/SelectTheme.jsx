import React from "react";
import { GlobalContext } from "../GlobalContext";

const SelectTheme = () => {
  const global = React.useContext(GlobalContext);

  function handleTheme({ target }) {
    global.setTheme(target.value);
    global.setThemeLocal(target.value);
  }

  React.useEffect(() => {
    global.setTheme(global.themeLocal);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${global.theme}`);
  }, [global.theme]);

  return (
    <span className="todo-theme">
      Theme:
      <select value={global.theme} onChange={handleTheme} >
        <option value="standard">Standard</option>
        <option value="beach">Beach</option>
        <option value="space">Space</option>
      </select>
    </span>
  );
};

export default SelectTheme;
