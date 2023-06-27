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
import PAT_chkup from './RegForms/PAT_chkup';
import PAT_Admit from './RegForms/PAT_Admit';
import PAT_Dis from './RegForms/PAT_Dis';
import PAT_Opr from './RegForms/PAT_Opr';
import PAT_Reg from './RegForms/PAT_Reg';

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
            Check Up
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '2'})} onClick={() => { toggle('2'); }} >
            Admit
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '3'})} onClick={() => { toggle('3'); }} >
            Operation
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '4'})} onClick={() => { toggle('4'); }} >
            Discharge
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({active:currentActiveTab === '5'})} onClick={() => { toggle('5'); }} >
            Regular
            </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={currentActiveTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <PAT_chkup />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <PAT_Admit />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="3">
                <Row>
                    <Col sm="12">
                        <PAT_Opr />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="4">
                <Row>
                    <Col sm="12">
                        <PAT_Dis />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="5">
                <Row>
                    <Col sm="12">
                        <PAT_Reg />
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
     
           
        
    </Box>
    
  );
} 
export default FormTabs;