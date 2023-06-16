import { useState } from 'react';
// import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function AccRegPT() {

  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="patient_id">Patient ID</Label>
              <Input 
              id="patient_id" 
              name="patient_id" 
              placeholder="Input Patient ID" 
              type="text" />
            </FormGroup>
          </Col>
          
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type='password' />
            </FormGroup>
          </Col>
          
        </Row>
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
}

export default AccRegPT;