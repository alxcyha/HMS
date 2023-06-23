import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id, 
      doctor_id, 
      date_of_admission, 
      date_of_operation,
      type_of_operation,
      operation_theater_number,
      condition_before_operation, 
      condition_after_operation, 
      treatment_advice
    } = event.target.elements;

    const formData = {
      patient_id: patient_id.value,
      doctor_id: doctor_id.value,
      date_of_admission: date_of_admission.value,
      date_of_operation: date_of_operation.value,
      type_of_operation: type_of_operation.value,
      operation_theater_number: operation_theater_number.value,
      condition_before_operation: condition_before_operation.value,
      condition_after_operation: condition_after_operation.value,
      treatment_advice: treatment_advice.value
    };

    // Fetch API call
    fetch('http://localhost/HMS/PHP/opr_insert.php', {
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
        window.alert('Patient Operation Submitted');
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
              <Label htmlFor="date_of_admission">Date of Admit</Label>
              <Input
                id="date_of_admission"
                name="date_of_admission"
                type="date"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="date_of_operation">Date of operation</Label>
              <Input
                id="date_of_operation"
                name="date_of_operation"
                type="date"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="type_of_operation">Type of Operation</Label>
              <Input
                id="type_of_operation"
                name="type_of_operation"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="operation_theater_number">Operation Theater Number</Label>
              <Input
                id="operation_theater_number"
                name="operation_theater_number"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <h4 style={{fontWeight: 500, marginBottom:20}}> Condition of Patient</h4>
          <Col>
            <FormGroup>
              <Label htmlFor="condition_before_operation">Before Operation</Label>
              <Input 
              id="condition_before_operation" 
              name="condition_before_operation" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="condition_after_operation">After Operation</Label>
              <Input 
              id="condition_after_operation" 
              name="condition_after_operation" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="treatment_advice">Treatment advice</Label>
              <Input 
              id="treatment_advice" 
              name="treatment_advice" 
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