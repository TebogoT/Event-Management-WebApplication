import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {

    return (

        <Container className="about-page">

            {/* About us Heading  */}
            <Row className="text-center mb-5">

                <Col>
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
            </Row>

            {/* Cards */}
            <Row>

                {/*Who we are card */}
                <Col md={4} className="mb-4">
                    <Card className="about-card">
                        <Card.Body>
                            <Card.Title>
                                Who we are
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Ut enim ad minim veniam.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/*Services card */}
                <Col md={4} className="mb-4">
                    <Card className="about-card">
                        <Card.Body>
                            <Card.Title>
                                Our Services
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Duis aute irure dolor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/*Vision card */}
                <Col md={4} className="mb-4">
                    <Card className="about-card">
                        <Card.Body>
                            <Card.Title>
                                Our Vision
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Excepteur sint occaecat cupidatat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

};

export default About;
