import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id,
      doctor_id,
      date_of_checkup,
      advance_payment,
      mode_of_payment,
      room_number,
      department_name,
      attendant_name,
      initial_condition,
      diagnosis,
      treatment
    } = event.target.elements;

    const formData = {
      patient_id: patient_id.value,
      doctor_id: doctor_id.value,
      date_of_checkup: date_of_checkup.value,
      advance_payment: advance_payment.value,
      mode_of_payment: mode_of_payment.value,
      room_number: room_number.value,
      department_name: department_name.value,
      attendant_name: attendant_name.value,
      initial_condition: initial_condition.value,
      diagnosis: diagnosis.value,
      treatment: treatment.value
    };

    // Fetch API call
    fetch('http://localhost/HMS/PHP/admit_insert.php', {
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
        window.alert('Admit Submitted');
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
              <Label htmlFor="room_number">Room Assigned</Label>
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
              <Label htmlFor="department_name">Department</Label>
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
              <Label htmlFor="attendant_name">Attendant</Label>
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
              <Label htmlFor="initial_condition">Initial Condition</Label>
              <Input 
              id="initial_condition" 
              name="initial_condition" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
              type="textarea" />
            </FormGroup>
          </Col>
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
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default RegFormPT;