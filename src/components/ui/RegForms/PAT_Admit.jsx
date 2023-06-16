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
              <Label htmlFor="doctor_id">Doctor ID</Label>
              <Input
                id="doctor_id"
                name="doctor_id"
                placeholder="Input Doctor ID"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="date_of_checkup">Date of Admit</Label>
              <Input
                id="date_of_checkup"
                name="date_of_checkup"
                type="date"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="advance_payment">Advance payment</Label>
              <Input
                id="advance_payment"
                name="advance_payment"
                type="number"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="mode_of_payment">Mode of payment	</Label>
              <Input
                id="mode_of_payment"
                name="mode_of_payment"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label htmlfor="room_number">Room Assigned</Label>
              <Input
                id="room_number"
                name="room_number"
                type='select'
              >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </Input>

            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlfor="department_name">Department</Label>
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
              <Label htmlfor="attendant_name">Attendant</Label>
              <Input
                id="attendant_name"
                name="attendant_name"
                placeholder="Enter name of attendant"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlfor="initial_condition">Initial Condition</Label>
              <Input 
              id="initial_condition" 
              name="initial_condition" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlfor="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlfor="treatment">treatment</Label>
              <Input 
              id="treatment" 
              name="treatment" 
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