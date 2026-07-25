import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container className="about-page">

      {/* Hero Section */}
      <Row className="about-hero text-center">
        <Col>
          <h1>About EventHub</h1>
          <p>
            Bringing people together through memorable events.
          </p>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="justify-content-center mt-5">
        <Col lg={10}>
          <Card className="about-card">
            <Card.Body>
              <h2>Our Story</h2>

              <p>
                EventHub was created to simplify the way people discover,
                organise and manage events. Whether you're planning a birthday,
                business conference, wedding, holiday gathering or community
                meeting, EventHub provides an easy-to-use platform that keeps
                everything in one place.
              </p>

              <p>
                We believe event planning should be exciting, not stressful.
                Our goal is to provide a clean, modern experience that helps
                users stay organised while making every event memorable.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mission Cards */}
      <Row className="mt-5 g-4">

        <Col md={4}>
          <Card className="info-card h-100">
            <Card.Body>
              <h3>Our Mission</h3>
              <p>
                To simplify event planning by providing a beautiful,
                reliable and user-friendly platform for everyone.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card h-100">
            <Card.Body>
              <h3>Our Vision</h3>
              <p>
                To become the preferred event management platform by
                connecting people through unforgettable experiences.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card h-100">
            <Card.Body>
              <h3>Our Values</h3>
              <p>
                Simplicity, innovation, reliability, security and creating
                meaningful connections through events.
              </p>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Why Choose Us */}
      <Row className="justify-content-center mt-5">
        <Col lg={10}>
          <Card className="about-card">
            <Card.Body>
              <h2>Why Choose EventHub?</h2>

              <ul>
                <li>Create and manage events with ease.</li>
                <li>Simple and intuitive interface.</li>
                <li>Secure user registration and login.</li>
                <li>Quick event editing and deletion.</li>
                <li>Designed for personal and professional use.</li>
                <li>Responsive design for desktop and mobile devices.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default About;
