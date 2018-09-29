import React from 'react';
import { Card, CardText, CardBody,
     } from 'reactstrap';
  
    const Example = (props) => {
        return (
          <div className="cards">
            <Card style={{margin:'30px'}}>
              <CardBody style={{marginTop:"10px"}}>
                <CardText className="cardtext">"The most beautiful things in the world cannot be seen or even touched.They must be felt with the heart."</CardText>
              </CardBody>
            </Card>
            <Card style={{margin:'30px'}}>
              <CardBody style={{marginTop:"10px"}}>
                <CardText className="cardtext">"Peace is not absence of conflict, it is the Ability to handle conflict by peaceful means."</CardText>
              </CardBody>
            </Card>
            <Card style={{margin:'30px'}}>
              <CardBody style={{marginTop:"10px"}}>
                <CardText className="cardtext">"Don't go through life, grow through life."</CardText>
              </CardBody>
            </Card>
          </div>
        );
      };
      
      export default Example;