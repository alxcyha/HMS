import { useState } from 'react';
// import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function AccRegDR() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const {
      doctor_name,
      doctor_id,
      phone_number,
      address,
      salary,
      qualification,
    } = event.target.elements;
  
    // Fetch API call
    fetch('http://localhost/testers/PHP/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doctorName: doctor_name.value,
        doctorID: doctor_id.value,
        phoneNumber: phone_number.value,
        address: address.value,
        salary: salary.value,
        qualification: qualification.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };  

  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
      <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="doctor_id">Doctor ID</Label>
              <Input 
              id="doctor_id" 
              name="doctor_id" 
              placeholder="Input Doctor ID" 
              type="text" />
            </FormGroup>
          </Col>
          
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type='password' />
            </FormGroup>
          </Col>
          
        </Row>
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}

export default AccRegDR;