import { useMemo, useState } from "react";

function ThemeHook() {
  const [theme, setTheme] = useState("light");

  const value = useMemo(() => {
    console.log("useMemo running...");
    return 10 * 5;
  });

  return (
    <>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Change Theme
      </button>

      <p>{theme}</p>
      <p>{value}</p>
    </>
  );
}

export default ThemeHook;
