import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/RegForm.css";
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Row, 
    Col, 
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane} from 'reactstrap';
import { Box } from '@mui/material';
import classnames from 'classnames';


export function FormTabs(props) {
    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }
  return (
    <Box>
        <Nav tabs>
        <NavItem>
            <NavLink  className={classnames({active:currentActiveTab === '1'})}onClick={() => { toggle('1'); }}>
            Doctor's Registration
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '2'})} onClick={() => { toggle('2'); }} >
            Patient's Registration
            </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={currentActiveTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <RegForm />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <RegFormPT />
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
     
           
        
    </Box>
    
  );
} 
export default FormTabs;

class RegForm extends React.Component  {
  render() {
    return (
        <Form>
        <Row>
            <Col md={5}>
            <FormGroup>
                <Label for="doctor_name">
                Name
                </Label>
                <Input
                id="doctor_name"
                name="doctor_name"
                placeholder="full name"
                type="name"
                />
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label for="doctor_id">
                Doctor ID
                </Label>
                <Input
                id="doctor_id"
                name="doctor_id"
                placeholder="input your ID number"
                type="username"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="password">
                Password
                </Label>
                <Input
                id="password"
                name="password"
                placeholder="password"
                type="password"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="phone_number">
                Number
                </Label>
                <Input
                id="phone_number"
                name="phone_number"
                placeholder="enter contact number"
                type="phone"
                />
            </FormGroup>
            </Col>
            
        </Row>
        <Row>
            <Col md={3}>
                <FormGroup>
                    <Label for="department_name">
                    Department
                    </Label>
                    <Input
                    id="department_name"
                    name="department_name"
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
            <Col md={5}>
                <FormGroup>
                    <Label for="Address">
                    Address 
                    </Label>
                    <Input
                    id="Address"
                    name="Address"
                    placeholder="enter complete address"
                    />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="salary">
                    salary
                    </Label>
                    <Input
                    id="salary"
                    name="salary"
                    type="number"
                    />
                </FormGroup>
            </Col>
        </Row>
        
        <Row>
            
            <Col>
            <FormGroup>
                <Label for="qualification">
                Qualification 
                </Label>
                <Input
                id="qualification"
                name="qualification"
                type="textarea"
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
class RegFormPT extends React.Component  {
    render() {
      return (
          <Form>
          <Row>
              <Col md={5}>
              <FormGroup>
                  <Label for="patient_name">
                  Patient's Name
                  </Label>
                  <Input
                  id="patients_Name"
                  name="patients_Name"
                  placeholder="full name"
                  type="username"
                  />
              </FormGroup>
              </Col>
              <Col md={3}>
              <FormGroup>
                  <Label for="patient_id">
                  Patient ID
                  </Label>
                  <Input
                  id="patient_id"
                  name="patient_id"
                  placeholder="input Patient ID"
                  type="username"
                  />
              </FormGroup>
              </Col>
              <Col md={2}>
              <FormGroup>
                  <Label for="password">
                  Password
                  </Label>
                  <Input
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                  />
              </FormGroup>
              </Col>
              <Col md={2}>
              <FormGroup>
                <Label for="phone_number">
                Number
                </Label>
                <Input
                id="phone_number"
                name="phone_number"
                placeholder="enter contact number"
                type="phone"
                />
             </FormGroup>
             </Col>
              
          </Row>
          <Row>
              <Col md={1}>
                
                  <FormGroup >
                      <Label for="sex">
                      Sex
                      </Label>
                     <FormGroup>
                        <Input type="select" name="sex" id="sex">
                            <option>Male</option>
                            <option>Female</option>
                        </Input>
                     </FormGroup>
        
                  </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                    <Label for="address">
                    Address 
                    </Label>
                    <Input
                    id="address"
                    name="address"
                    placeholder="enter complete address"
                    />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                    <Label for="city">
                    City
                    </Label>
                    <Input
                    id="city"
                    name="city"
                    placeholder="enter city"
                    />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                    <Label for="department_name">
                    Department
                    </Label>
                    <Input
                    id="department_name"
                    name="department_name"
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
             
              <Col md={3}>
                <FormGroup>
                    <Label for="doctor_name">
                    Doctor's Name
                    </Label>
                    <Input
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter name of Doctor"
                    type="name"
                    />
                </FormGroup>
              </Col>
          </Row>
          <Row>
            
            <Col>
            <FormGroup>
                <Label for="diagnosis">
                Diagnosis
                </Label>
                <Input
                id="diagnosis"
                name="diagnosis"
                type="textarea"
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

