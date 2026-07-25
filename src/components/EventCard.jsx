import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import "./EventCard.css"



const EventCard = ({event, onEdit}) => {

  //GIVING "EventCard" ACCESS TO DELETE
  const { deleteEvent } = useContext(EventContext);



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
        <Button
         variant="warning"
         onClick={onEdit}>
          Edit
        </Button>
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => {
            const confirmDelete = window.confirm (
              "Are you sure you want to delete this event?"
            );
            if (confirmDelete) {
              deleteEvent(event.id);
            }
          }}  
        >
          Delete
        </Button>
      </Card.Body>
    </Card>

  );
}
 
export default EventCard
