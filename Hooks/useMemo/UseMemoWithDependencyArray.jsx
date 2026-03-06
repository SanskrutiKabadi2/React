import { useMemo, useState } from "react";

function ThemeHook() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(1);

  const calculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 100;
  }, [count]);

  return (
    <>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Change Theme
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Theme: {theme}</p>
      <p>Result: {calculation}</p>
    </>
  );
}

export default ThemeHook;
