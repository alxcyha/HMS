import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';

const W2 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <PaidTwoToneIcon sx={{ width: 1/10 , height: 1/10}}/>
          <CardTitle>Audit</CardTitle>
          <CardSubtitle>Table</CardSubtitle>
          <CardText>List of Patients with corresponding admission date and ID of Doctor</CardText>
          <Button href="/homeDR/Audit">Check Audit table</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default W2;