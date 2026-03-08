import { use, useCallback, useState } from "react";

function UseCallBackExample(){

    const [count,setCount]=useState(0);

    const handleclick=useCallback(()=>{
        console.log("usecallback running...");

    },[]);

    return (
        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>increase count</button>
        <button onClick={handleclick}>Log</button>
        
        </>
    );
}
export default UseCallBackExample;
