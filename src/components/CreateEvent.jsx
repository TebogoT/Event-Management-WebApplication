import React from 'react'
import { useContext } from "react";
import { useFormik } from "formik";
import { EventContext } from "../context/EventContext";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./CreateEvent.css"

const CreateEvent = ({onClose, event}) => {

    //Allow to create events
    const { addEvent, updateEvent } = useContext(EventContext);


    //Using Formik to create evet card parameters for the form
    const formik = useFormik({

        initialValues: {
            title: event ? event.title: "",
            date: event ? event.date: "",
            time: event ? event.time: "",
            location: event ? event.location: "",
            category: event ? event.category: "",
            description: event ? event.description: ""

        },
        enableReinitialize: true,
        
        //Using validate to make sure input fields are not empty and are filled in
        validate: values => {

            const errors = {};
            if (!values.title) {
                errors.title = "Title is required";
            }

            if (!values.date) {
                errors.date = "Date is required";
            }

            if (!values.time) {
                errors.time = "Time is required";
            }

            if (!values.location) {
                errors.location = "Location is required";
            }

            if (!values.category) {
                errors.category = "Category is required";
            }

            if (!values.description) {
                errors.description = "Description is required";
            }

            return errors;
        },

        onSubmit: values => {
            if (event) {
                updateEvent({
                    ...event,
                    ...values
                });
            } else {
                addEvent({
                    id:Date.now(),
                    ...values
                })
            }
            onClose();
        }

    });

 //CREATING THE EVENT CARD
  return (
    <Container fluid className="event-page mt-5">
        <Row className="justify-content-center align-items-center h-100">
            <Col xs={11} sm={10} md={8} lg={6} style={{ maxWidth: '540px' }}>
                <Card className="login-card">
                    <Card.Body>
                        <Card.Title>
                            {event ? "Edit Event" : "Create Event"}
                        </Card.Title>
                        <Form onSubmit={formik.handleSubmit}>

                            {/*FORM TO CONTROL TITLE FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.title &&
                                !!formik.errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/*FORM TO CONTROL DATE FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                type="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.date &&
                                !!formik.errors.date}
                                />
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.date}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/*FORM TO CONTROL TIME FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Time</Form.Label>
                                <Form.Control
                                type="time"
                                name="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.time &&
                                !!formik.errors.time}
                                />
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.time}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/*FORM TO CONTROL LOCATION FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                type="text"
                                name="location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.location &&
                                !!formik.errors.location}
                                />
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.location}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/*FORM TO CONTROL CATERGORY FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Catergory</Form.Label>
                                <Form.Select
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={
                                        formik.touched.category &&
                                        !!formik.errors.category
                                    }
                                >
                                    <option value="">Select</option>
                                    <option>Meeting</option>
                                    <option>Birthday</option>
                                    <option>Conference</option>
                                    <option>Wedding</option>
                                    <option>Holiday</option>
                                    <option>Family Responsibilities</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.category}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/*FORM TO CONTROL DESCRIPTION FIELD*/}
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                as="textarea"
                                rows={4}
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.description &&
                                !!formik.errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                {formik.errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                type="submit"
                                className="w-100"
                            >
                                {event ? "Update Event" : "Create Event"}
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-100 mt-2"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}

export default CreateEvent
