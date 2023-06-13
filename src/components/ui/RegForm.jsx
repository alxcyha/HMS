import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/RegForm.css";
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class RegForm extends React.Component  {
  render() {
    return (
        <Form>
        <Row>
            <Col md={5}>
            <FormGroup>
                <Label for="Doc_Name">
                Name
                </Label>
                <Input
                id="Doc_Name"
                name="name"
                placeholder="with a placeholder"
                type="name"
                />
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label for="Doc_id">
                ID
                </Label>
                <Input
                id="Doc_id"
                name="Doc_id"
                placeholder="input ID"
                type="username"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="examplePassword">
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="PH_no">
                phone number
                </Label>
                <Input
                id="PH_no"
                name="PH_no"
                placeholder="enter contact number"
                type="phone"
                />
            </FormGroup>
            </Col>
            
        </Row>
        <Col md={3}>
            <FormGroup>
                <Label for="Doc_dept">
                Department
                </Label>
                <Input
                id="Doc_dept"
                name="department"
                type="select"
                >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                </Input>
            </FormGroup>
        </Col>
        <FormGroup>
            <Label for="exampleAddress">
            Address 
            </Label>
            <Input
            id="exampleAddress"
            name="address"
            placeholder="Apartment, studio, or floor"
            />
        </FormGroup>
        <Row>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleCity">
                City
                </Label>
                <Input
                id="exampleCity"
                name="city"
                />
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="exampleState">
                State
                </Label>
                <Input
                id="exampleState"
                name="state"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="exampleZip">
                Zip
                </Label>
                <Input
                id="exampleZip"
                name="zip"
                />
            </FormGroup>
            </Col>
        </Row>
        <Button>
            Sign up
        </Button>
        </Form>
    );
    
  }
    
}

