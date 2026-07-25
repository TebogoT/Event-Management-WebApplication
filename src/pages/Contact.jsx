import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <Container className="contact-page">

      {/* Hero Section */}
      <Row className="contact-hero text-center">
        <Col>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Whether you have a question,
            feedback, or need assistance, our team is here to help.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 g-4">

        {/* Contact Information */}
        <Col lg={5}>
          <Card className="contact-card h-100">
            <Card.Body>

              <h2>Get in Touch</h2>

              <div className="contact-item">
                <h5>📍 Address</h5>
                <p>
                  123 EventHub Street<br />
                  Johannesburg, Gauteng<br />
                  South Africa
                </p>
              </div>

              <div className="contact-item">
                <h5>📞 Phone</h5>
                <p>+27 11 123 4567</p>
              </div>

              <div className="contact-item">
                <h5>📧 Email</h5>
                <p>support@eventhub.co.za</p>
              </div>

              <div className="contact-item">
                <h5>🕒 Office Hours</h5>
                <p>
                  Monday - Friday<br />
                  08:00 - 17:00
                </p>
              </div>

            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col lg={7}>
          <Card className="contact-card">
            <Card.Body>

              <h2>Send Us a Message</h2>

              <Form>

                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type your message here..."
                  />
                </Form.Group>

                <Button
                  className="contact-button"
                  type="submit"
                >
                  Send Message
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
