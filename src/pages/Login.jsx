import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Login.css';


const Login = () => {

  // Hook used to navigate to another page after successful login
  const navigate = useNavigate();

  //Give the login page acces to the created login function in the userContext.jsx
  const { login } = useContext(UserContext);

   const [loginError, setLoginError] = useState("");

  // Initialize Formik to manage the login form
  const formik = useFormik({

    // Initial values for all login form fields. Formik uses these to keep track of the user's input
    initialValues: {
      email: '',
      password: '',
    },

    // Validate the form values to ensure that the email and password fields are not empty and that the email is in a valid format, it does this by checking if the email and password values are empty and if the email value matches a regular expression for a valid email format
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
        // Check if the email is in a valid format using a regular expression
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } 
      return errors;
    },

    onSubmit: (values) => {

      const success = login(
          values.email.trim(),
          values.password
      );

      if (success) {
        setLoginError("")
          navigate("/dashboard");
      } else {
        
        setLoginError("Invalid email or password.");
      }
    }
  });

return (
    <Container fluid className="login-page">
      <Row>
        <Col xs={11} sm={9} md={7} lg={5} style={{ maxWidth: '440px' }}>
          <Card className="login-card">
            <Card.Body>
              <Card.Title className="mb-4">Login</Card.Title>
              <Form onSubmit={formik.handleSubmit}>

                {/* EMAIL INPUT FIELD */}
                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  {/* Use formik to handle the input values and changes for the email and password fields, it does this by setting the value and onChange properties of the input fields to the corresponding formik values and handleChange function */}
                  <Form.Control 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formik.values.email} 
                    onChange={ (e) => {
                      formik.handleChange(e);
                      setLoginError("");
                    }}
                    onBlur={formik.handleBlur} 
                    isInvalid={formik.touched.email && !!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* PASSWORD INPUT FIELD */}
                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formik.values.password} 
                    onChange={ (e) => {
                      formik.handleChange(e);
                      setLoginError("");
                    }} 
                    onBlur={formik.handleBlur} 
                    isInvalid={formik.touched.password && !!formik.errors.password} 
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* LOGIN ERROR */}
                {loginError && (
                    <p className="text-danger text-center">
                        {loginError}
                    </p>
                )}
                {/*SUBMIT BUTTON*/}
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="login-button"
                >
                  Login
                </Button>
                <p className="text-center">
                  Don't have an account?{""} <Link to="/register">Register here</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login