import React from "react";
import PublicEvents from "../components/PublicEvents";
import { Container, Row, Col } from "react-bootstrap";
import HeroBanner from "../components/HeroBanner";
import "./Home.css";

const Home = () => {
  return (
    <Container>


        <HeroBanner />


        <div>
            <h2 className="home-section-title">New Events</h2>
            <Row className="g-4">
                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>
            </Row>
        </div>

        <div>
            <h2 className="home-section-title">Popular Events</h2>
            <Row className="g-4">
                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>
            </Row>
        </div>
        <div>
            <h2 className="home-section-title">Events Near You</h2>
            <Row className="g-4">
                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>

                <Col md={4}>
                <PublicEvents />
                </Col>
            </Row>
        </div>
    </Container>
  );
};

export default Home;