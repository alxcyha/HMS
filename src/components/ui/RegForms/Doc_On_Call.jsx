import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function RegFormDR() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const {
      doctor_name,
      doctor_id,
      phone_number,
      address,
      fees_per_call,
      payment_due,
      qualification
    } = event.target.elements;
  
    // Fetch API call
    fetch('http://localhost/HMS/PHP/doc_call.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doctorName: doctor_name.value,
        doctorID: doctor_id.value,
        phoneNumber: phone_number.value,
        address: address.value,
        feesPerCall: fees_per_call.value,
        paymentDue: payment_due.value,
        qualification: qualification.value
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.alert('Registration successful');
        } else {
          if (data.message.includes("Integrity constraint violation")) {
            window.alert('Register your Doctor ID First!');
          } else {
            window.alert('Registration failed');
          }
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        window.alert('An error occurred. Please try again.');
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
              <Col md={3}> 
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
            <Col md={3}/> 
         </Row> 
         <Row> 
            <Col md={5}> 
              <FormGroup> 
                <Label htmlFor="address">Address</Label> 
                <Input 
                id="address" 
                name="address" 
                placeholder="Enter Complete Address" 
                type='text'
                /> 
              </FormGroup> 
            </Col> 
            <Col md={4}> 
              <FormGroup> 
                <Label htmlFor="fees_per_call">Fees per Call</Label> 
                <Input 
                id="fees_per_call" 
                name="fees_per_call" 
                type="number" 
                /> 
              </FormGroup> 
            </Col>
            <Col md={4}> 
              <FormGroup> 
                <Label htmlFor="payment_due">Payment Due</Label> 
                <Input 
                id="payment_due" 
                name="payment_due" 
                type="number" 
                /> 
              </FormGroup> 
            </Col>
         </Row> 
         <Row> 
           <Col> 
             <FormGroup> 
               <Label htmlFor="qualification">Qualification</Label> 
               <Input 
               id="qualification" 
               name="qualification" 
               type="text" 
               /> 
             </FormGroup> 
           </Col> 
         </Row> 
         <Button type="submit">Sign up</Button> 
       </Form> 
    </>
  );
}

export default RegFormDR;