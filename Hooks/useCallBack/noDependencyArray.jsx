import { useState, useCallback } from "react";

export default function UseCallBackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  });

  console.log("Function recreated");

  return (
    <>
    <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
// usecallback will run on every rerender
