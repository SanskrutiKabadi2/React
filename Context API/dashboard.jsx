import { useContext } from "react";
import { userContext } from "./userContext";

function DashBoard(){
    return(
        <>  
        <NavBar/>
        <h1>Dashboard Page</h1>
        <Sidebar/>
        </>

    );
}
function NavBar(){
    const {theme,setTheme}=useContext(userContext);
    return (
        <>
       <h1>NaveBar</h1>
       <p>Theme : {theme}</p>
       <button onClick={()=>{theme==="dark"?setTheme("light"):setTheme("dark")}}>Change Theme</button>
       </>

    );
}

function Sidebar(){
    return (
        <>
        <Profile/>
        </>

    );
}
function Profile({userName}){
    const {user,logout}=useContext(userContext);
    return (
        <>
        <p>User Profile</p>
        <h2>{!user? "user Log Out":user.name}</h2>
        <button onClick={logout}>logOut</button>
        </>

    );
}
export default DashBoard;
