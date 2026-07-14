import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { PriceContext } from "./PriceContext.jsx"
import './NavigationBar.css'


const NavigationBar = () => {

    // ACCESS THE PRICE VALUE FROM THE PriceContext TO DISPLAY IT IN THE NAVIGATION BAR IT DOES THIS BY USING THE USECONTEXT HOOK TO ACCESS THE PRICE VALUE FROM THE PriceContext
    const { price } = useContext(PriceContext);

    // RENDER THE NAVIGATION BAR WITH LINKS TO HOME, PRODUCTS, AND ABOUT US PAGES
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="navLink">Products</Link>
                    </li>
                    <li>
                        <Link to="/about" className="navLink">About US</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login" className="navLink">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="navLink">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar