import React from "react";
import { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { EventContext } from "../context/EventContext";
import CreateEvent from "../components/CreateEvent";
import EventCard from "../components/EventCard";

import "./Dashboard.css";

const Dashboard = () => {

    // Controls whether the Create Event form is visible
    const [showCreateEvent, setShowCreateEvent] = useState(false);

    // Stores the event being edited
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Get all events from Context
    const { events } = useContext(EventContext);

    return (
        <Container className="dashboard-page">

            <Row className="mb-4">
                <Col className="text-center">
                    <h1 className="dashboard-title">
                        Dashboard
                    </h1>

                    <p className="dashboard-subtitle">
                        Manage all of your events from one place.
                    </p>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col className="text-center">
                    <Button
                        className="add-event-btn"
                        onClick={() => {
                            setSelectedEvent(null);
                            setShowCreateEvent(true);
                        }}
                    >
                        Add Event
                    </Button>
                </Col>
            </Row>

            {showCreateEvent && (
                <CreateEvent
                    event={selectedEvent}
                    onClose={() => setShowCreateEvent(false)}
                />
            )}

            <Row>
                <Col>

                    {events.length === 0 ? (

                        <p className="no-events">
                            No events have been created yet.
                        </p>

                    ) : (

                        events.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onEdit={() => {
                                    setSelectedEvent(event);
                                    setShowCreateEvent(true);
                                }}
                            />
                        ))

                    )}

                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;
