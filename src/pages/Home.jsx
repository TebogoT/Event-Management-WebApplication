import React from 'react'
import PublicEvents from "../components/PublicEvents";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import HeroBanner from "../components/HeroBanner";
import "./Home.css";

const Home = () => {

  const { events } = useContext(EventContext);

  const popularEvents = events.filter(
      event => event.category === "Popular"
  );

  const upcomingEvents = events.filter(
      event => event.category === "Upcoming"
  );


  return (
    <Container>

      <HeroBanner/>
      <h2>New Events</h2>
      <Row className="g-4">
        {events.map((event) => (
            <Col
                md={4}
                key={event.id}
            >
                <PublicEventCard event={event} />
            </Col>
        ))}
      </Row>

      <h2>Popular Events</h2>
      <Row className="g-4">
        {popularEvents.map((event) => (
            <Col
                md={4}
                key={event.id}
            >
                <PublicEventCard event={event} />
            </Col>
        ))}
      </Row>

      <h2>Evenst near you</h2>
      <Row className="g-4">
        {upcomingEvents.map((event) => (
            <Col
                md={4}
                key={event.id}
            >
                <PublicEventCard event={event} />
            </Col>
        ))}
      </Row>
    </Container>
    
  )
}

export default Home
