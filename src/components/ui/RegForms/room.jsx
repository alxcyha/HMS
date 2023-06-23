import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function Room() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const {
      doctor_name,
      doctor_id,
      department_name
    } = event.target.elements;
  
    // Fetch API call
    fetch('http://localhost/HMS/PHP/alldoc_insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doctorName: doctor_name.value,
        doctorID: doctor_id.value,
        departmentName: department_name.value
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      if (data.success) {
        window.alert('Register Success');
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
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="room_number">Room Number</Label>
              <Input 
              id="room_number" 
              name="room_number" 
              placeholder="Input Room Number" 
              type="text" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="room_type">Room Type</Label>
              <Input 
              id="room_type" 
              name="room_type" 
              type="select"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="status">Status</Label>
              <Input 
              id="Status" 
              name="Status" 
              type="select"
              >
                <option>Available</option>
                <option>Not Available</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="patient_id">Patient ID</Label>
              <Input
                id="patient_id"
                name="patient_id"
                placeholder="Input Patient ID Number"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="patient_name">Patient Name</Label>
              <Input
                id="patient_name"
                name="patient_name"
                placeholder="Input Patient Name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}> 
              <FormGroup> 
                <Label htmlFor="charges_per_day">Charges per Day</Label> 
                <Input 
                id="charges_per_day" 
                name="charges_per_day" 
                type="number" 
                /> 
              </FormGroup> 
            </Col>
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default Room;