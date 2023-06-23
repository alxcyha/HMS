import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id, 
      visit_date, 
      treatment_status, 
      treatment, 
      medicine_recommended, 
      diagnosis
    } = event.target.elements;

    const formData = {
      patient_id: patient_id.value,
      visit_date: visit_date.value,
      treatment_status: treatment_status.value,
      treatment: treatment.value,
      medicine_recommended: medicine_recommended.value,
      diagnosis: diagnosis.value
    };

    // Fetch API call
    fetch('http://localhost/HMS/PHP/reg_insert.php', {
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
        window.alert('Patient Regular Submitted');
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
              <Label htmlFor="treatment_status">treatment status</Label>
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
              <Label htmlFor="treatment">treatment</Label>
              <Input 
              id="treatment" 
              name="treatment" 
              type="textarea" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="medicine_recommended">Medicine recommended</Label>
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
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Input 
              id="diagnosis" 
              name="diagnosis" 
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