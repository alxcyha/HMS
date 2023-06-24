import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

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
      diagnosis,
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
      diagnosis: diagnosis.value,
    };

    // Fetch API call
    fetch("http://localhost/HMS/PHP/pregister.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        if (data.success) {
          window.alert("Patient Registration Successful!");
        } else {
          window.alert("Registration Failed!");
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        window.alert("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="patients_Name">Patient's Name</Label>
              <Input
                id="patient_name"
                name="patient_name"
                placeholder="Full Name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="patient_id">Patient ID</Label>
              <Input
                id="patient_id"
                name="patient_id"
                placeholder="Input Patient ID"
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
          <Col md={1}>
            <FormGroup>
              <Label htmlFor="sex">Sex</Label>
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
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                placeholder="Enter Age"
                type="number"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter Complete Address"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter city"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="department_name">Department</Label>
              <Input id="department_name" name="department_name" type="select">
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
              <Label htmlFor="doctor_id">Doctor's ID</Label>
              <Input
                id="doctor_name"
                name="doctor_name"
                placeholder="Enter ID of Doctor"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Input id="diagnosis" name="diagnosis" type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default RegFormPT;
