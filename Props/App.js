function Count({value}){
    const {count,setCount}=value;
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>

    );
}
export default Count;
