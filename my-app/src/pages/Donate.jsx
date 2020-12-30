import React from 'react';
import { Container, Jumbotron, Button, Accordion, Card, ListGroup, Image } from 'react-bootstrap';
import scholars from '../data/scholars.json';
import donations from '../data/donations.json';
import _ from 'underscore/underscore-esm';
import DonateAccord from '../components/DonateAccord';
import PhotoFinishLine from '../images/donate/donations_finishline.jpg';
import '../style.css';
import '../style-donate.css';

class Donate extends React.Component {
  render() {
    const jumbotronStyle = { textAlign: 'center', paddingTop: '450px' };
    const arrayInfo = (_.groupBy(donations, 'group'));
    return (
        <div className='donate'>
            <Container><h1 className='scholarHeader'> DONATIONS</h1></Container>
            <div class="hovereffect">
                <Image class="img-responsive" src={PhotoFinishLine} fluid/>
                    <div class="overlay">
                        <h2>Will you help a Rough Rider make it to the endzone?</h2>
                        <p>
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                            <input type="hidden" name="cmd" value="_donations" />
                            <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                            <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <button type="submit" class="btn btn-primary btn-lg">Donate Here</button>
                          </form>
                        </p>
                    </div>
              </div>
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
                  <input type="hidden" name="amount" value="25.00"></input>
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
