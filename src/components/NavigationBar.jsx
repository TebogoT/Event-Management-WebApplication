import React from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {UserContext} from "../context/UserContext"
import './NavigationBar.css'


const NavigationBar = () => {


    // RENDER THE NAVIGATION BAR WITH LINKS TO HOME, PRODUCTS, AND ABOUT US PAGES
    return (
        <div className="navigationBar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="navLink">Home</NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard" className="navLink">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="navLink">About US</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navLink">Contact US</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/login" className="navLink">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className="navLink">Register</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar
