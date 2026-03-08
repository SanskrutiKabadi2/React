import React, { useState, useCallback } from "react";
export default function Example() {
  const [count, setCount] = useState(0);

  const showCount = useCallback(() => {
    console.log(count);
  }, []);
   console.log("parent componenet rendered...");
  return (
    <>
    <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ChildComponent showCount={showCount}/>
    </>
  );
}

const  ChildComponent=React.memo((props)=>{
        console.log("child componenet rendered...");
        return (
            <>
            <button onClick={props.showCount}>Show Count</button>
            
            </>
        );
});
// prevent unnecessary child renders 
