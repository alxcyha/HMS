import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import SickTwoToneIcon from '@mui/icons-material/SickTwoTone';

const W1 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <SickTwoToneIcon sx={{ width: 1/10 , height: 1/10}}/>
            <CardTitle>Patients</CardTitle>
          <CardSubtitle>Register here</CardSubtitle>
          <CardText>Register first for patient ID then proceed to choose if for admit, operation, check-up, and etc.</CardText>
          <Button href="/HomeDR/PTi">Register</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default W1;