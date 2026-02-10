import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLogged,setIsLogged]=useState(false);
  return (
    <>
    <Routes>
      <Route path='/' element={!isLogged?<Home/>:<Login/>}></Route>
      </Routes>
      <button onClick={() => setIsLogged(true)}>Login</button>
      <button onClick={() => setIsLogged(false)}>Logout</button>
    </>
   
  );
}

export default App;
