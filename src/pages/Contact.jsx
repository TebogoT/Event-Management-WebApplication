import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {

    return (

        <Container className="contact-page">
            <Row className="text-center mb-5">
                <Col>
                    <h1>Contact Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="contact-card">
                        <Card.Body>
                            <Form>

                                {/*Name input */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>

                                {/*Email input */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                {/*Message input */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                    />
                                </Form.Group>

                                <Button className="contact-button">
                                    Send
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

};

export default Contact;
