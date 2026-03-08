import { useState, useCallback } from "react";

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const showCount = useCallback(() => {
    console.log(count);
  }, [count]);

  return (
    <>
    <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={showCount}>Show Count</button>
    </>
  );
}
