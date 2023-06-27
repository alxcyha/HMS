import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function AccRegPT() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      patient_id,
      password
    } = event.target.elements;

    // Fetch API call
    fetch('http://localhost/HMS/PHP/insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: patient_id.value,
        password: password.value,
        userType: 'patient' // Provide a default value for userType
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        if (data.success) {
          window.alert('Account Registration Successful!');
        } else {
          window.alert('Registration Failed! Register your Patient ID First!');
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
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={5}>
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
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Input
              id="userType"
              name="userType"
              type="hidden"
              defaultValue="patient" // Provide a default value for userType
            />
          </Col>
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default AccRegPT;
