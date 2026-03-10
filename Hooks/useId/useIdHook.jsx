import { useId, useState } from "react";

function useIdHook() {
    const [count ,setCount]=useState(0);
  const id = useId();
  return (
    <>
        <h1>id : {id}</h1>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>

    </>
  );
}

export default useIdHook;
