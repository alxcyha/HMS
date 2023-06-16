import { useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function AccRegDR() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { 
      username,
      password
    } = event.target.elements;
  
    // Fetch API call
    fetch('http://localhost/testers/PHP/insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: username.value,
        password: password.value,
        userType: 'doctor' // Provide a default value for userType
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
         // Display alert if sign-up is successful
         window.alert('Sign up successful!');
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };  
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="username">DOCTOR ID</Label>
              <Input
                id="username"
                name="username"
                placeholder="Input Doctor ID"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Input
              id="userType"
              name="userType"
              type="hidden"
              defaultValue="doctor" // Provide a default value for userType
            />
          </Col>
        </Row>
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}

export default AccRegDR;
