import React, { useMemo, useState } from "react";

const ExpensiveCal =() => {
  console.log("inside expense");

  const result = useMemo(() => {
    
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
      sum += i;
    }
    return sum;
  },[]);


  return (
    <>
      <p>expense: {result}</p>
    </>
  );
};


const UseMemo=()=>{
    console.log("inside usememo");
    const [count,setCount]=useState(0);

    return(
        <>
            <div>
                <ExpensiveCal/>
                <p>count:{count}</p>
                <button onClick={()=>{setCount(count+1)}}>Increment</button>
            </div>
        
        </>

    );
}
export default UseMemo;
