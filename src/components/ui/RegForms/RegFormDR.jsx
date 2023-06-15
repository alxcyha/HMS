import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormDR() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_name,
      patient_id,
      phone_number,
      sex,
      age,
      address,
      city,
      department_name,
      doctor_name,
      diagnosis
    } = event.target.elements;

    const formData = {
      patientName: patient_name.value,
      patientID: patient_id.value,
      phoneNumber: phone_number.value,
      sex: sex.value,
      age: age.value,
      address: address.value,
      city: city.value,
      departmentName: department_name.value,
      doctorName: doctor_name.value,
      diagnosis: diagnosis.value
    };

    // Fetch API call
    fetch('http://localhost/testers/PHP/pregister.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
      <Form onSubmit={handleSubmit} method='post'>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label for="patients_Name">Patient's Name</Label>
              <Input
                id="patient_name"
                name="patient_name"
                placeholder="full name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="patient_id">Patient ID</Label>
              <Input
                id="patient_id"
                name="patient_id"
                placeholder="input Patient ID"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="phone_number">Number</Label>
              <Input
                id="phone_number"
                name="phone_number"
                placeholder="enter contact number"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <FormGroup>
              <Label for="sex">Sex</Label>
              <FormGroup>
                <Input 
                type="select" 
                name="sex" 
                id="sex">
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </FormGroup>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                name="age"
                placeholder="Enter age"
                type='number'
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="enter complete address"
                type='text'
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input 
              id="city" 
              name="city" 
              placeholder="enter city"
              type='text'
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="department_name">Department</Label>
              <Input 
              id="department_name" 
              name="department_name" 
              type="select"
              >
                <option>Anesthesiology</option>
                <option>Cardiology</option>
                <option>Cardiothoracic Surgery</option>
                <option>Dermatology</option>
                <option>Emergency Medicine</option>
                <option>Endocrinology</option>
                <option>ENT (Otolaryngology)</option>
                <option>Gastroenterology</option>
                <option>General Surgery</option>
                <option>Hematology</option>
                <option>Nephrology</option>
                <option>Neurology</option>
                <option>Oncology</option>
                <option>Ophthalmology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Physical Therapy</option>
                <option>Psychiatry</option>
                <option>Pulmonology</option>
                <option>Radiology</option>
                <option>Urology</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="doctor_name">Doctor's Name</Label>
              <Input
                id="doctor_name"
                name="doctor_name"
                placeholder="Enter name of Doctor"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}

export default RegFormDR;