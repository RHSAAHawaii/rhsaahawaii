import React from 'react';
import { Container, Jumbotron, Button, Accordion, Card, ListGroup, Form } from 'react-bootstrap';
import scholars from '../data/scholars.json';
import donations from '../data/donations.json';
import _ from 'underscore/underscore-esm';
import DonateAccord from '../components/DonateAccord';
import '../style.css';

class Donate extends React.Component {
  render() {
    const jumbotronStyle = { textAlign: 'center' };
    const arrayInfo = (_.groupBy(donations, 'group'));
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
                    <ListGroup.Item><b>Donor List:</b></ListGroup.Item>
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
              {_.map(arrayInfo, (current, index)=> <DonateAccord groupInfo={index} donationInfo={current} />)}
            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Donate;
