import { useEffect, useState } from "react";

function UseEff(){
    const [timer,setTimer]=useState(0);
    const [start,setStart]=useState(false);

    useEffect(()=>{
        if(!start)return;
        const timerId=setInterval(()=>{
            setTimer((prev)=>prev+1);
        },1000);

        return ()=>{
            clearInterval(timerId);
            console.log("timer finished");
        }

    },[start]);
    return(
        <>
            <h1>hello Timer</h1>
            <h1>{timer}</h1>
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
        </>                                                                                                                                                                                                                                                                                                                                     
);}
export default UseEff;
