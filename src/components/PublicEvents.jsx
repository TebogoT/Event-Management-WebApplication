import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

const PublicEvents = () => {
  const event = {
    title: "Winter Festival",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing ",
    category: "Popular",
    image: "https://picsum.photos/600/400",
    date: "25 July 2026",
    time: "18:00",
    location: "Johannesburg",
  };

  return (
    <Card className="event-card h-100">
      <Card.Img
        variant="top"
        src={event.image}
        alt={event.title}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Badge bg="primary" className="mb-2">
          {event.category}
        </Badge>

        <Card.Title>{event.title}</Card.Title>

        <Card.Text>{event.description}</Card.Text>

        <hr />
        <div className="event-details">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>

        <Button variant="outline-primary" className="event-btn">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PublicEvents;