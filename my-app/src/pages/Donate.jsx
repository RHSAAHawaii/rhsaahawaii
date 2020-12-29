import React from 'react';
import { Container, Jumbotron, Button, Accordion, Card, ListGroup, Form } from 'react-bootstrap';
import '../style.css';

class Donate extends React.Component {
  render() {
    const jumbotronStyle = { textAlign: 'center' };
    return (
        <div class='donate'>
          <h1 className='impactHeader'> Donations</h1>
          <div style={jumbotronStyle}>
            <Jumbotron> 
              <h1>Donate and Make a Difference!</h1>
              <h5>A simple gift can go a long way. </h5>
              <p>
                Your investment in students will strengthen our Rough Rider Ohana and make our community a better place.
              </p>
              <p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                  <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </p>
              <p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                  <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <button type="submit" class="btn btn-primary">Donate</button>
                </form>
              </p>
            </Jumbotron>
          </div>
          <Container>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Scholarships - $128,600
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup.Item><b>Donor List:</b></ListGroup.Item>
                    <ListGroup.Item>Class of '61</ListGroup.Item>
                    <ListGroup.Item>Class of '62</ListGroup.Item>
                    <ListGroup.Item>Class of '64</ListGroup.Item>
                    <ListGroup.Item>Class of '67</ListGroup.Item>
                    <ListGroup.Item>Friends of Red & Gold</ListGroup.Item>
                    <ListGroup.Item>Hawaii Alpha Delta Kappa</ListGroup.Item>
                    <ListGroup.Item>Melanie Kawano</ListGroup.Item>
                    <ListGroup.Item>Lien Phu</ListGroup.Item>
                    <ListGroup.Item>RAF</ListGroup.Item>
                  </Card.Body>
                </Accordion.Collapse>
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
                    <ListGroup.Item>Concrete Benches (Class of '63') - $9,678</ListGroup.Item>
                    <ListGroup.Item>Eagle Scout Project - $400</ListGroup.Item>
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
                  <Card.Body as={ListGroup}>
                    <ListGroup.Item>Classroom Supplies - $12,803</ListGroup.Item>
                    <ListGroup.Item>Theodore Roosevelt Bust (RAF Gift) - $6,530</ListGroup.Item>
                    <ListGroup.Item>AED Institute of America (AEDs for RHS) - $3,720</ListGroup.Item>
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
                  <Card.Body as={ListGroup}>
                    <ListGroup.Item>Robotics Team - $7,000</ListGroup.Item>
                    <ListGroup.Item>Golf Team - $6,000</ListGroup.Item>
                    <ListGroup.Item>Creative Teens (Class of '57') - $5,495</ListGroup.Item>
                    <ListGroup.Item>Football Team - $5,000</ListGroup.Item>
                    <ListGroup.Item>RHS HOSA Group - $5,000</ListGroup.Item>
                    <ListGroup.Item>Hiroshinma Student Exchange - $2,600</ListGroup.Item>
                    <ListGroup.Item>HI Council on Economic Education - $1,900</ListGroup.Item>
                    <ListGroup.Item>Relay For Life - $1,300</ListGroup.Item>
                    <ListGroup.Item>Various Campus Events - $1,260</ListGroup.Item>
                    <ListGroup.Item>Spirit Club - $1,000</ListGroup.Item>
                    <ListGroup.Item>Music Boosters $300</ListGroup.Item>
                    <ListGroup.Item>STEM - $200</ListGroup.Item>
                    <ListGroup.Item>Graphic Design Class - $100</ListGroup.Item>
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
