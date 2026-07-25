import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

const PublicEvents = ({ event }) => {
    return (
        <Card className="shadow-sm h-100">
            {/* Event Image */}
            <Card.Img
                variant="top"
                src={event.image}
                alt={event.title}
                style={{
                    height: "200px",
                    objectFit: "cover"
                }}
            />
            <Card.Body>

                {/* Category */}
                <Badge bg="primary" className="mb-2">
                    {event.category}
                </Badge>

                {/* Title */}
                <Card.Title>
                    {event.title}
                </Card.Title>

                {/* Description */}
                <Card.Text>
                    {event.description}
                </Card.Text>

                <hr />

                {/* Event Details */}
                <p>
                    <strong>Date:</strong> {event.date}
                </p>

                <p>
                    <strong>Time:</strong> {event.time}
                </p>

                <p>
                    <strong>Location:</strong> {event.location}
                </p>

                <Button
                    variant="outline-primary"
                    className="w-100"
                >
                    View Details
                </Button>

            </Card.Body>
        </Card>
    );
};

export default PublicEvents;