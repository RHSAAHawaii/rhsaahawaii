import React from 'react';
import { Container, Jumbotron, Button, Accordion, Card, ListGroup, Image, Col, Row, Modal } from 'react-bootstrap';
import scholars from '../data/scholars.json';
import donations from '../data/donations.json';
import _ from 'underscore/underscore-esm';
import DonateAccord from '../components/DonateAccord';
import PhotoFinishLine from '../images/donate/donations_finishline.jpg';
import PhotoDonateChoices from '../images/donate/kenekeGusman.jpg';
import PhotoPresMessage from '../images/donate/president_message.jpg';
import '../style.css';
import '../style-donate.css';


class Donate extends React.Component {
  state = { isOpen: false };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const jumbotronStyle = { textAlign: 'center'};
    const arrayInfo = (_.groupBy(donations, 'group'));
    const donationsImageStyle = {  height: 'auto', right: '0%' };

    return (
        <div className='donate'>
            <Container><h1 className='scholarHeader'> DONATIONS</h1></Container>
            <div class="hovereffect">
                <Image class="img-responsive" src={PhotoFinishLine} fluid/>
                    <div class="overlay">
                        <h2>Will you help a Rough Rider make it to the endzone?</h2>
                        <p>
                          <button variant='primary' onClick={this.openModal} class="btn btn-primary btn-lg">
                            Learn More
                          </button>
                          <Modal show={this.state.isOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                              <Modal.Title>Will you support our Rough Rider Ohana?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Image class="img-responsive" src={PhotoPresMessage} style={{width: '30%', float: 'left', marginRight: '1em'}}/>
                              Your donation will directly impact RHS students and alumni. Help to set them up for success through our scholarships, campus improvement projects, and grants to support classrooms.
                              <br/>Donations to Roosevelt Alumni Foundation (RAF) are processed via PayPal using the red donate button below.
                              <br/>All donations to RAF and Friends of Roosevelt Project Grad are tax deductible.
                              <br/>Thank you for helping out a Rough Rider!
                              <br/><b>Garrett Ogawa</b> | RHSAA President
                            </Modal.Body>
                            <Modal.Footer>
                              <button variant='secondary' onClick={this.closeModal} class="btn btn-primary btn-lg" style={{backgroundColor:'gray'}}>
                                Later
                              </button>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                                <input type="hidden" name="cmd" value="_donations" />
                                <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                                <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <button type="submit" class="btn btn-primary btn-lg" variant='primary' onClick={this.closeModal}>Donate</button>
                                </form>
                            </Modal.Footer>
                          </Modal>
                        </p>
                        
                    </div>
              </div>
            <Jumbotron style={{backgroundColor: '#212529', marginBottom: '0', borderRadius: '0'}}>
              buffer<br/>
            </Jumbotron>
            <Jumbotron style={jumbotronStyle}> 
              <h1>Donate and Make a Difference!</h1>
              <h5>A simple gift can go a long way. </h5>
              <p>
                Your investment in students will strengthen our Rough Rider Ohana and make our community a better place.
              </p>
              <Container style={{paddingTop: '20px'}}>
                <Row>
                  <Col className="col-6">
                    <Image class="img-responsive" src={PhotoDonateChoices} style={donationsImageStyle} fluid/>
                  </Col>
                  <Col className="col-6">
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{fontSize:20, paddingTop: '15px'}}>
                      <b>Keneke Gusman</b><br/>
                      Class of 2020<br/>
                      RAF Scholarship Recipient<br/><br/>
                      Set star students like Keneke up for success in post-secondary education. Donate below:
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#e9ecef', borderWidth: '0', marginTop: '1em'}}>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                        <input type="hidden" name="cmd" value="_donations" />
                        <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                        <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="amount" value="5.00"></input>
                        <button type="submit" class="btn btn-primary btn-lg">$5</button>
                      </form>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#e9ecef', borderWidth: '0'}}>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                          <input type="hidden" name="cmd" value="_donations" />
                          <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                          <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                          <input type="hidden" name="currency_code" value="USD" />
                          <input type="hidden" name="amount" value="10.00"></input>
                          <button type="submit" class="btn btn-primary btn-lg">$10</button>
                        </form>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#e9ecef', borderWidth: '0'}}>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                          <input type="hidden" name="cmd" value="_donations" />
                          <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                          <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                          <input type="hidden" name="currency_code" value="USD" />
                          <input type="hidden" name="amount" value="25.00"></input>
                          <button type="submit" class="btn btn-primary btn-lg">$25</button>
                        </form>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#e9ecef', borderWidth: '0'}}>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" >
                          <input type="hidden" name="cmd" value="_donations" />
                          <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                          <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                          <input type="hidden" name="currency_code" value="USD" />
                          <button type="submit" class="btn btn-primary btn-lg">Custom</button>
                        </form>
                    </ListGroup.Item>
                  </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          <Container>
            <h2 className='scholarHeader'>Donations at Work</h2>
            <Accordion className='donate-acrd'>
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
              {_.map(arrayInfo, (current, index)=> <DonateAccord groupInfo={index} donationInfo={current} />)}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="text" eventKey="1" className='donate-acrdTitle'>
                    <b>Project Grad</b> | $9,810
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Donate;
