import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "./Help.css";

const Help = () => {

    return (

        <Container className="help-page">
            <h1 className="text-center">Help</h1>
            <p className="text-center">
                This page can help you use the EventHub website.
            </p>
            <Row>

                <Col md={4}>
                    <Card className="help-card">
                        <Card.Body>
                            <h4>Register</h4>
                            <p>
                                Create an account by filling in the registration form.
                                After that you can log in.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="help-card">
                        <Card.Body>
                            <h4>Login</h4>
                            <p>
                                Enter your email and password to log into your account.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="help-card">
                        <Card.Body>
                            <h4>Dashboard</h4>
                            <p>
                                The dashboard lets you create, edit and delete your events.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <br />

            {/*USING " ACCORDION BOOTSTRAP " TO SHOW CONTENT WHEN CLICKING A PANEL */}
            <Accordion>
                <Accordion.Item eventKey="0">

                    <Accordion.Header>
                        How do I create an event?
                    </Accordion.Header>

                    <Accordion.Body>
                        Log in, go to the Dashboard and click the Add Event button.
                        Fill in the form and press Create Event.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">

                    <Accordion.Header>
                        How do I edit an event?
                    </Accordion.Header>

                    <Accordion.Body>
                        Go to the Dashboard and click the Edit button on the event
                        you want to change.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">

                    <Accordion.Header>
                        How do I delete an event?
                    </Accordion.Header>

                    <Accordion.Body>
                        Click the Delete button on the event card.
                        You will be asked if you are sure before the event is deleted.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">

                    <Accordion.Header>
                        Can I see events without logging in?
                    </Accordion.Header>

                    <Accordion.Body>
                        Yes. Anyone can view events on the Home page.
                        You only need to log in if you want to manage events.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">

                    <Accordion.Header>
                        Where are my events saved?
                    </Accordion.Header>

                    <Accordion.Body>
                        Your events are saved in Local Storage on your browser.
                        They will still be there after refreshing the page.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>

    );

};

export default Help;