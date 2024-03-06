import React from "react";
import Login from './components/login';
import { Routes,Route } from "react-router-dom";
import SignUp from './components/signUp';
import AppNav from "./components/nav";
import Home from "./components/Home";
import Cart from "./components/cart";
import Addfavourites from "./components/fav";
function App() {
 
  return(
    <>
      <AppNav></AppNav>

      <Routes>
      <Route path="/" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/fav" element={<Addfavourites/>}></Route>

        
      </Routes>
    </> 
);

}

export default App;
