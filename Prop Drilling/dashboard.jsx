
function DashBoard({userName}){
    return(
        <>  
        <h1>NavBar</h1>
        <h1>Dashboard</h1>
        <Sidebar userName={userName}/>
        </>

    );
}
function Sidebar({userName}){
    return (
        <>
        <Profile userName={userName}/>
        </>

    );
}
function Profile({userName}){
    return (
        <>
        <h2>{userName}</h2>
        </>

    );
}
export default DashBoard;
