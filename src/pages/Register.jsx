import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import NavigationBar from '../components/NavigationBar.jsx'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import './login.css'


const Register = () => {

  // Hook used to navigate to another page after successful registration
  const navigate = useNavigate();

   // Initialize Formik to manage the login form
  const formik = useFormik({

    // Initial values for all registration form fields. Formik uses these to keep track of the user's input
    initialValues: {
      fullName: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },

    // Validate the form values to ensure that the input fields are not empty and that the email is in a valid format, it does this by checking if the email and password values are empty and if the email value matches a regular expression for a valid email format
    validate: (values) => {
      const errors = {};
      if (!values.fullName) {
        errors.fullName = 'Full name is required';
      } else if (values.fullName.length >10) {
        errors.fullName = 'Full name shoud not exceed 10 characters'
      }

      if (!values.surname) {
        errors.surname = 'Surname is required';
      } else if (values.surname.length >20) {
        errors.surname = 'Full name shoud not exceed 20 characters'
      }

      if (!values.email) {
        errors.email = 'Email is required';

        // Check if the email is in a valid format using a regular expression
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
 
      // Check if password is in a valid format using a regular expression
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
      ) {
        errors.password =
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
    },

  
    onSubmit: (values) => {

      // Save the registered user's details in localStorage.
      localStorage.setItem('user', JSON.stringify(values));

      // Inform the user that registration was successful.
      //REMOVED, AFTER REGISTRATION AFTER TAKING ME TO THE LOGIN PAGE I WAS UNABLE TO CLICK IN THE INPUT
      //alert('Registration successful! Please log in.');

      // Redirect the user to the Login page.
      navigate('/login');
    }
  });

  return (
    <div>
      <NavigationBar />
      <Container className="login-page">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="login-card">
              <Card.Body>
                <Card.Title>Register</Card.Title>
                <Form onSubmit={formik.handleSubmit}>

                  {/* FULL NAME INPUT FIELD */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formik.values.fullName} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      isInvalid={formik.touched.fullName && !!formik.errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.fullName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* SURNAME INPUT FIELD*/}
                  <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control 
                      type="text" 
                      id="surname" 
                      name="surname" 
                      value={formik.values.surname} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      isInvalid={formik.touched.surname && !!formik.errors.surname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.surname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* EMAIL INPUT FIELD */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formik.values.email} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* PASSWORD INPUT FIELD */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                      type="password" 
                      id="password" 
                      name="password" 
                      value={formik.values.password} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      isInvalid={formik.touched.password && !!formik.errors.password} 
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>


                  {/* CONFIRM PASSWORD INPUT FIELD */}
                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  {/*SUBMIT BUTTON*/}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 mt-3 login-button"
                  >
                    Register
                  </Button>
                  <p className="mt-3 text-center">
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register