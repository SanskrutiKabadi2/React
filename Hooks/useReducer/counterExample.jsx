import { useReducer } from "react";

function UseReducerHook(){
    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return state+1;

            case "Decrement":
                return state-1;

            case "Reset":
                return 0;

            default:
             return state;
        }

    }
    const [state,dispatch]=useReducer(reducer,0);
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </>
    );
}
export default UseReducerHook;
