import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id,
      doctor_id,
      date_of_checkup,
      status,
      diagnosis,
      treatment
    } = event.target.elements;

    const formData = {
      patientID: patient_id.value,
      doctorID: doctor_id.value,
      dateOfCheckup: date_of_checkup.value,
      status: status.value,
      diagnosis: diagnosis.value,
      treatment: treatment.value
    };

    // Fetch API call
    fetch('http://localhost/HMS/PHP/chckup_insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      if (data.success) {
        window.alert('Patient Submitted');
      } else {
        window.alert('Missing Fields!');
      }
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
      window.alert('An error occurred. Please try again later.');
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} method='post'>
        <Row>
          <Col md={4}>
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
          <Col md={3}>
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
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="date_of_checkup">Date of Check Up</Label>
              <Input
                id="date_of_checkup"
                name="date_of_checkup"
                type="date"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="status">Status</Label>
              <Input 
              id="status"
              name="status" 
              type="select"
              >
                <option>Admitted</option>
                <option>referred for operation</option>
                <option>regular patient</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="treatment">treatment</Label>
              <Input 
              id="treatment" 
              name="treatment" 
              type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default RegFormPT;