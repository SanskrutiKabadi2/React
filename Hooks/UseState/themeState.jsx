import { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <h1>Theme: {theme}</h1>
      <button onClick={changeTheme}>Toggle Theme</button>
    </>
  );
}

export default Theme;
