import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

function RegFormPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id,
      payment_made,
      mode_of_payment,
      date_of_discharge,
      treatment_given,
      treatment_advice,
    } = event.target.elements;

    const formData = {
      patient_id: patient_id.value,
      payment_made: payment_made.value,
      mode_of_payment: mode_of_payment.value,
      date_of_discharge: date_of_discharge.value,
      treatment_given: treatment_given.value,
      treatment_advice: treatment_advice.value,
    };

    // Fetch API call
    fetch("http://localhost/HMS/PHP/dis_insert.php", {
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
          window.alert("Now Discharged!");
        } else {
          window.alert("Missing Fields!");
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
          <Col md={3}>
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
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="payment_made">Payment Made</Label>
              <Input id="payment_made" name="payment_made" type="number" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="mode_of_payment">Mode of Payment </Label>
              <Input id="mode_of_payment" name="mode_of_payment" type="text" />
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
              <Label htmlFor="treatment_given">Treatment Given</Label>
              <Input
                id="treatment_given"
                name="treatment_given"
                type="textarea"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="treatment_advice">Treatment Advice</Label>
              <Input
                id="treatment_advice"
                name="treatment_advice"
                type="textarea"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default RegFormPT;
