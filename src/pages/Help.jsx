import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "./help.css";

const Help = () => {
    return (
        <Container className="help-page py-5">

            <Row className="text-center mb-5">
                <Col>
                    <h1 className="help-title">Help Centre</h1>
                    <p className="help-subtitle">
                        Welcome to EventHub. Find answers to common questions and learn
                        how to get the most from the platform.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={4}>
                    <Card className="help-card h-100">
                        <Card.Body>
                            <h4>Create an Account</h4>
                            <p>
                                Register with your full name, email address and password.
                                Once registered you can securely log in and manage your
                                personal events.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="help-card h-100">
                        <Card.Body>
                            <h4>Manage Events</h4>
                            <p>
                                Logged-in users can create, edit and delete events from the
                                dashboard. All events are automatically saved in your browser.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="help-card h-100">
                        <Card.Body>
                            <h4>Browse Events</h4>
                            <p>
                                Visitors can browse public events without logging in. Login
                                is only required to manage events.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Accordion alwaysOpen>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                How do I create an event?
                            </Accordion.Header>
                            <Accordion.Body>
                                Login to your account, navigate to the Dashboard and click
                                the <strong>Create Event</strong> button. Complete the form
                                and save your event.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Can I edit an event?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes. Select the event you want to modify and click the
                                <strong> Edit</strong> button. Update the information and
                                save your changes.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                How do I delete an event?
                            </Accordion.Header>
                            <Accordion.Body>
                                Click the <strong>Delete</strong> button on an event card.
                                You will be asked to confirm before the event is removed.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Why do I need an account?
                            </Accordion.Header>
                            <Accordion.Body>
                                An account allows you to securely manage your own events,
                                while visitors can still browse available events without
                                signing in.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Where is my information stored?
                            </Accordion.Header>
                            <Accordion.Body>
                                This version of EventHub stores user and event information
                                in your browser using Local Storage. Your data remains
                                available after refreshing the page on the same device.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                I forgot my password
                            </Accordion.Header>
                            <Accordion.Body>
                                Password recovery is not available in this version of
                                EventHub. You will need to register another account or
                                clear your browser's Local Storage for testing purposes.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>

        </Container>
    );
};

export default Help;