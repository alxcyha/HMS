import { useState } from 'react';
// import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function AccRegDR() {
  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
      <Row>
          <Col md={5}>
            <FormGroup>
              <Label htmlFor="doctor_id">Doctor ID</Label>
              <Input 
              id="doctor_id" 
              name="doctor_id" 
              placeholder="Input Doctor ID" 
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

export default AccRegDR;