import React from 'react';
import { Header } from 'semantic-ui-react';
import { Container, Jumbotron, Button, Form, Accordion, Card } from 'react-bootstrap';
import '../style.css';

class Donate extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div class='donate'>
           <h1><b>Donations</b></h1>
          <Jumbotron> 
            <h1>Donate and Make a Difference!</h1><br/>
            <h5>A simple gift can go a long way. </h5>
            <p>
              Your investment will help our Rough Rider Ohana and make our community a better place.
            </p>
            <p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="rafhawaii@gmail.com" />
              <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </p>
          </Jumbotron>
          <Container>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Scholarships - $73,100
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Project Grad - $9,810
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Campus Beautification - $10,078
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                        <li>Concrete Benches (Class of '63') - $9,678</li>
                        <li>Eagle Scout Project - $400</li>
                      </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    School Supplies - $23.053
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                        <li>Classroom Supplies - $12,803</li>
                        <li>Theodore Roosevelt Bust (RAF Gift) - $6,530</li>
                        <li>AED Institute of America (AEDs for RHS) - $3,720</li>
                      </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Extracurricular Activities - $37,655
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul>
                        <li>Robotics Team - $7,000</li>
                        <li>Golf Team - $6,000</li>
                        <li>Creative Teens (Class of '57') - $5,495</li>
                        <li>Football Team - $5,000</li>
                        <li>RHS HOSA Group - $5,000</li>
                        <li>Hiroshinma Student Exchange - $2,600</li>
                        <li>HI Council on Economic Education - $1,900</li>
                        <li>Relay For Life - $1,300</li>
                        <li>Various Campus Events - $1,260</li>
                        <li>Spirit Club - $1,000</li>
                        <li>Music Boosters $300</li>
                        <li>STEM - $200</li>
                        <li>Graphic Design Class - $100</li>
                      </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Donate;
