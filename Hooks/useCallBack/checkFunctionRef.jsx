import React, { useState, useCallback, useRef, useEffect } from "react";

export default function useCallbackExample() {
  const [count, setCount] = useState(0);

  const prevFn = useRef(null);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  useEffect(() => {
    if (prevFn.current === handleClick) {
      console.log("Same function reference");
    } else {
      console.log("New function created");
    }

    prevFn.current = handleClick;
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
