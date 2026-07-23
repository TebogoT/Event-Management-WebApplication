import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact"
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/welcome" element = {<Welcome/>}/>

        {/*Protected Routes*/}
        <Route element = {<ProtectedRoute/>}>
          <Route path="/dashboard" element = {<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

