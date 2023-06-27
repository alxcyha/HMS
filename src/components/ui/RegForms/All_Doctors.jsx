import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function All_Doctors() {
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
              <Label htmlFor="doctor_name">Name</Label>
              <Input 
              id="doctor_name" 
              name="doctor_name" 
              placeholder="Full Name" 
              type="text" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="doctor_id">Doctor ID</Label>
              <Input
                id="doctor_id"
                name="doctor_id"
                placeholder="Input your ID Number"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
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
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default All_Doctors;