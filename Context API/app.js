import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard'
import { userContext } from './userContext';
import { useState } from 'react';

function App() {
  const [user,setuser]=useState({name:"sanskruti",email:"sanskrutikabadi@gmail.com"});
  const [theme,setTheme]=useState("light");
  const logout=()=>{
    setuser(null);
  }
  return (
    <userContext.Provider value={{user,setuser,theme,setTheme,logout}} >
      <Dashboard/>
      </ userContext.Provider>
    
  );
}

export default App;
