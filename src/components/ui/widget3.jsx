import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import KingBedTwoToneIcon from '@mui/icons-material/KingBedTwoTone';

const W3 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <KingBedTwoToneIcon sx={{ width: 1/10 , height: 1/10}}/>
          <CardTitle>Hospital Rooms</CardTitle>
          <CardSubtitle>Check Room Status</CardSubtitle>
          <CardText>Room status will be displayed here, click button to redirect to the page</CardText>
          <Button href="/homeDR/Rooms">Show Rooms</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default W3;