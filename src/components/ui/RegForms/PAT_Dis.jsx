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
          <Col md={3}>
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
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="payment_made">Payment made</Label>
              <Input
                id="payment_made"
                name="payment_made"
                type="number"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="mode_of_payment">Mode of payment	</Label>
              <Input
                id="mode_of_payment"
                name="mode_of_payment"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="date_of_discharge">Date of Discharge</Label>
              <Input
                id="date_of_discharge"
                name="date_of_discharge"
                type="date"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlfor="treatment_given">Treatment given</Label>
              <Input 
              id="treatment_given" 
              name="treatment_given" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlfor="treatment_advice">Treatment advice</Label>
              <Input 
              id="treatment_advice" 
              name="treatment_advice" 
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