import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import {
    Navbar,
    Nav,
    Container,
    Button
} from "react-bootstrap";

import "./NavigationBar.css";


const NavigationBar = () => {

    const { user, logout } = useContext(UserContext);

    return (
        <Navbar
            expand="lg"
            className="navigation-bar"
            sticky="top"
        >
            <Container>

                {/* Logo */}
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="brand-name"
                >
                    EventHub
                </Navbar.Brand>

                {/* Mobile Menu Button */}
                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    {/* Left Navigation */}
                    <Nav className="me-auto">

                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/dashboard">
                            Dashboard
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/about">
                            About Us
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/contact">
                            Contact Us
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/help">
                            Help
                        </Nav.Link>

                    </Nav>

                    {/* Right Navigation */}
                    <Nav>

                        {!user ? (
                            <>
                                <Nav.Link as={NavLink} to="/login">
                                    Login
                                </Nav.Link>

                                <Button
                                    as={NavLink}
                                    to="/register"
                                    variant="success"
                                    className="ms-2"
                                >
                                    Register
                                </Button>
                            </>
                        ) : (
                            <>
                                <Navbar.Text className="me-3">
                                    Welcome, {user.fullName}
                                </Navbar.Text>

                                <Button
                                    as = {NavLink}
                                    to="/home"
                                    variant="outline-light"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </>
                        )}

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavigationBar;