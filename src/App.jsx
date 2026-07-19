import { Routes, Route } from "react-router-dom";


import React from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import NavigationBar from "./components/NavigationBar";


const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/welcome" element = {<Welcome/>}/>
      </Routes>
    </div>
  )
}

export default App

