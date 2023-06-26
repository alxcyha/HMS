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
          <CardSubtitle>check patients</CardSubtitle>
          <CardText>View registered patients on this hospital by clicking view below.</CardText>
          <Button href="/HomeDR/PTi">view</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default W1;