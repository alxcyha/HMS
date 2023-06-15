import { useState } from 'react';
// import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
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
                    <Label for="patient_name">
                    Patient's Name
                    </Label>
                    <Input
                    id="patients_Name"
                    name="patients_Name"
                    placeholder="full name"
                    type="username"
                    />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                    <Label for="patient_id">
                    Patient ID
                    </Label>
                    <Input
                    id="patient_id"
                    name="patient_id"
                    placeholder="input Patient ID"
                    type="username"
                    />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                    <Label for="password">
                    Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="phone_number">
                  Number
                  </Label>
                  <Input
                  id="phone_number"
                  name="phone_number"
                  placeholder="enter contact number"
                  type="phone"
                  />
              </FormGroup>
             </Col>
              
          </Row>
          <Row>
              <Col md={1}>
                
              <FormGroup >
                  <Label for="sex">
                    Sex
                  </Label>
                  <FormGroup>
                    <Input type="select" name="sex" id="sex">
                        <option>Male</option>
                        <option>Female</option>
                    </Input>
                  </FormGroup>
        
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="address">
                  Address 
                  </Label>
                  <Input
                  id="address"
                  name="address"
                  placeholder="enter complete address"
                  />
                </FormGroup>
              </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="city">
                City
                </Label>
                <Input
                id="city"
                name="city"
                placeholder="enter city"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="department_name">
                Department
                </Label>
                <Input
                id="department_name"
                name="department_name"
                type="select"
                >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
                </Input>
              </FormGroup>
            </Col>
             
            <Col md={3}>
              <FormGroup>
                <Label for="doctor_name">
                Doctor's Name
                </Label>
                <Input
                id="doctor_name"
                name="doctor_name"
                placeholder="Enter name of Doctor"
                type="name"
                />
              </FormGroup>
            </Col>
        </Row>
        <Row>
            
          <Col>
            <FormGroup>
              <Label for="diagnosis">
              Diagnosis
              </Label>
              <Input
              id="diagnosis"
              name="diagnosis"
              type="textarea"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign up</Button>
      </Form>
    </>
  );
}

export default RegFormPT;