import React from 'react';
import { Container, Jumbotron, Button, Accordion, Card, ListGroup, Form } from 'react-bootstrap';
import scholars from '../data/scholars.json';
import _ from 'underscore/underscore-esm';
import DonateAccord from '../components/DonateAccord';
import '../style.css';

class Donate extends React.Component {
  render() {
    const jumbotronStyle = { textAlign: 'center' };
    const arrayInfo = (_.groupBy(scholars, 'Class'));
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
                  <button type="submit" class="btn btn-primary btn-lg">Donate Here</button>
                </form>
              </p>
            </Jumbotron>
          </div>
          <Container>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" className='donate-acrdTitle'>
                    <b>Scholarships</b> | ${_.reduce(_.map(_.pluck(scholars, 'Amount'), amount=>parseFloat(amount.substring(1).replace(/,/g, '')) ), (a,b)=>a+b).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {_.map(_.sortBy(_.uniq(_.pluck(scholars, 'Scholarship'))), (donor)=><ListGroup.Item>{donor}</ListGroup.Item>)}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" className='donate-acrdTitle'>
                    <b>Project Grad</b> | $9,810
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2" className='donate-acrdTitle'>
                    <b>Campus Beautification</b> | $10,078
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
                  <Accordion.Toggle as={Button} variant="link" eventKey="3" className='donate-acrdTitle'>
                    <b>School Supplies</b> | $23.053
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
                  <Accordion.Toggle as={Button} variant="link" eventKey="4" className='donate-acrdTitle'>
                    <b>Extracurricular Activities</b> | $37,655
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
