import { useState } from 'react';
// import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormDR() {
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
              <Label htmlFor="doctor_name">Name</Label>
              <Input 
              id="doctor_name" 
              name="doctor_name" 
              placeholder="Full Name" 
              type="text" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="doctor_id">Doctor ID</Label>
              <Input
                id="doctor_id"
                name="doctor_id"
                placeholder="Input your ID Number"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="phone_number">Number</Label>
              <Input
                id="phone_number"
                name="phone_number"
                placeholder="Enter Contact Number"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" placeholder="Enter Complete Address" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" name="salary" type="number" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="qualification">Qualification</Label>
              <Input id="qualification" name="qualification" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}

export default RegFormDR;