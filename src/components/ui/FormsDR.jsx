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
import RegFormDR from './RegForms/RegFormDR';
import Doc_On_Call from './RegForms/Doc_On_Call';


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
            Doctor
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '2'})} onClick={() => { toggle('2'); }} >
            Doctor on call
            </NavLink>
        </NavItem>
       
        </Nav>
        <TabContent activeTab={currentActiveTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <RegFormDR />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <Doc_On_Call />
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
     
           
        
    </Box>
    
  );
} 
export default FormTabs;