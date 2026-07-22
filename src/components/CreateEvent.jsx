import React from 'react'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { EventContext } from "../context/EventContext";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const CreateEvent = () => {

    //Allow to create events
    const { addEvent } = useContext(EventContext);

    const navigate = useNavigate();


    //Using Formik to create evet card parameters for the form
    const formik = useFormik({
    initialValues: {
        title: "",
        date: "",
        time: "",
        location: "",
        category: "",
        description: ""

    },


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
        const newEvent = {
            id: Date.now(),
            ...values
        };
        addEvent(newEvent);
        navigate("/dashboard");
    }

});

 //CREATING THE EVENT CARD
  return (
    <Container className="mt-5">
        <Row className="justify-content-center">
            <Col md={8}>
                <Card>
                    <Card.Body>
                        <Card.Title>Create Event</Card.Title>
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
                                    type="text"
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
                                    type="text"
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
                                    name="location"
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
                                Create Event
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
