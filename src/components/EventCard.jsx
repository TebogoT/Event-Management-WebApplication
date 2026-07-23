import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

const EventCard = ({event}) => {

  events.map((event) => (
    <EventCard
    key={event.id}
    event={event}
    />
  ))


  return (
    
    <Card className="mb-3">
      <Card.Body>
        {/*TITLE OF THE CARD*/}
        <Card.Title>
          {event.title}
        </Card.Title>

        {/*SUBTITLE OF THE CARD*/}
        <Card.Subtitle className="mb-2 text-muted">
          {event.category}
        </Card.Subtitle>

        {/*DATE OF THE CARD*/}
        <Card.Text>
          <strong>Date:</strong>
          {event.date}
        </Card.Text>

        {/*TIME OF THE CARD*/}
        <Card.Text>
          <strong>Time:</strong>
          {event.time}
        </Card.Text>

        {/*LOCATION OF THE CARD*/}
        <Card.Text>
          <strong>Location:</strong>
          {event.location}
        </Card.Text>

        {/*DESCRIPTION OF THE CARD*/}
        <Card.Text>
          {event.description}
        </Card.Text>

        {/*BUTTONS OF THE CARD*/}
        <Button variant="warning">
          Edit
        </Button>
        <Button
          variant="danger"
          className="ms-2"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>

  );
}
 
export default EventCard
