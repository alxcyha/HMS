import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
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
          <Col md={4}>
            <FormGroup>
              <Label htmlfor="patient_id">Patient ID</Label>
              <Input
                id="patient_id"
                name="patient_id"
                placeholder="input Patient ID"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="visit_date">Date of Visit</Label>
              <Input
                id="visit_date"
                name="visit_date"
                type="date"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlfor="treatment_status">treatment status</Label>
              <Input
                id="treatment_status"
                name="treatment_status"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlfor="treatment">treatment</Label>
              <Input 
              id="treatment" 
              name="treatment" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlfor="medicine_recommended">Medicine recommended</Label>
              <Input 
              id="medicine_recommended" 
              name="medicine_recommended" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlfor="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default RegFormPT;