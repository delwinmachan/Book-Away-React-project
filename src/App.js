import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Screens/Home/Home";
import Details from "./components/Screens/Details/Details";
import "./App.css";
import Wishlist from "./components/Screens/wishlist/Wishlist";
/**
 * routes to main three pages are defined here
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Product' element={<Details></Details>}></Route>
        <Route path='/Wishlist' element={<Wishlist></Wishlist>}></Route>
      </Routes>
    </>
  );
};

export default App;
