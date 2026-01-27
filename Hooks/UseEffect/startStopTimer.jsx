import { useEffect, useState } from "react";

function Timer(){
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
    function handleUpdate(){
        if(start){
            setStart(false);
        }
        else{
            setTimer(1);
             setStart(true);

        }

    }
    return(
        <>
            <h1>hello Timer</h1>
            <h1>{timer}</h1>
            <button onClick={handleUpdate}>{!start?"Start":"reset/stop"}</button>
        
        </>                                                                                                                                                                                                                                                                                                                                     
);}
export default Timer;
