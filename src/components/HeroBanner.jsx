import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <div
            className="hero-banner d-flex align-items-center text-center text-white"
        >
            <Container>

                <h1 className="display-3 fw-bold">
                    Discover Amazing Events
                </h1>

                <p className="lead mt-3">
                    Organize and find conferences, meetings, weddings, birthdays and
                    community events happening near you.
                </p>

            </Container>
        </div>
    );
};

export default HeroBanner;