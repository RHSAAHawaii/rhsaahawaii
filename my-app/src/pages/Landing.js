import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Segment, Modal, Button, Header, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import rhsPhoto from '../images/landing2.jpg';
import ogawa from '../images/headshot-ogawa.jpg';
import test from '../images/rhsaa-logo-test.jpg';
import projectGrad from '../images/projectgrad-temp.jpg';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';
const rhsaaPreview = 'https://www.freewebs.com/rhsaahawaii/2010.6.23%20Class%20of%201960%20RHS%20History%20Mural%20%283%29.jpg';
const rafPreview = 'https://www.freewebs.com/rhsaahawaii/80th%20Anniversary%20-%20Gary%20Dymally%20157.jpg';
const servicePreview = 'https://www.freewebs.com/rhsaahawaii/2010.6.23%20Class%20of%201960%20RHS%20History%20Mural.jpg';

class Landing extends React.Component {
  state = { modalOpen: false }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const segmentStyle = { margin: '5px 0 0 0', padding: '40px'};
    const gridStyle = { height: "500px" }
    return (
        <div className='backgroundImage'>
          <Container>
            <Grid container verticalAlign="middle" style={gridStyle}>
              <Grid.Row/>
              <Grid.Row columns={2} centered>
                <Grid.Column width={9}>
                  <Image rounded src={test} />
                  <Modal
                      trigger={
                        <Button onClick={this.handleOpen}
                                color='red'
                                size='huge'
                                fluid
                                attached='bottom'
                                animated='fade'
                        >
                          <Button.Content visible>Donate Now</Button.Content>
                          <Button.Content hidden>Make a Difference</Button.Content>
                        </Button>}
                      open={this.state.modalOpen}
                      onClose={this.handleClose}
                  >
                    <Modal.Header>Will you support our Rough Rider Ohana?</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src={ogawa} />
                      <Modal.Description>
                        <Header>Make Riders Successful.</Header>
                        <p>Your donation will directly impact RHS students and alumni. Help to set them up for success through our scholarships, campus improvement projects, and grants to support classrooms.</p>
                        <p>Donations to RAF are processed via PayPal using the yellow donate button below.</p>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                          <input type="hidden" name="cmd" value="_donations" />
                          <input type="hidden" name="business" value="rafhawaii@gmail.com" />
                          <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                          <input type="hidden" name="currency_code" value="USD" />
                          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <br/><p>All donations to RAF and FRPG are tax deductible.</p>
                        Thank you for helping out a Rough Rider!
                        <br/><br/><b>Garrett Ogawa</b> | RHSAA President
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> OK
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row/>
            </Grid>
          </Container>
            <Segment style={segmentStyle} raised color='yellow'>
              <Container>
                <Grid>
                  <Grid.Column width={4}>
                    <Header color='red'>Alumni Association</Header>
                    <Image rounded src={rhsaaPreview}/>
                    <br/><b>RHS Alumni Association (RHSAA)</b>
                    <br/><a href='http://rhsaahawaii.org/'><b>http://rhsaahawaii.org/</b></a>
                    <br/>RHSAA works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other. We publish newsletters for our members and co-host, with the RAF, an annual ho’olaule’a – a get together for alumni.
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>Alumni Foundation</Header>
                    <Image rounded src={rafPreview}/>
                    <br/><b>Roosevelt Alumni Foundation (RAF)</b>
                    <br/><a href='http://rhsaahawaii.org/'><b>http://rhsaahawaii.org/</b></a>
                    <br/>RAF raises funds to support our alma mater, Roosevelt High School. Among various methods of support, we offer annual scholarships to alumni and admit qualified applicants to the Roosevelt Hall of Fame. As a designated non-profit organization, donations to the RAF are tax deductible.
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>School Support</Header>
                    <Image rounded src={servicePreview}/>
                    <br/><b>Scholarships and Service</b>
                    <br/><a href='http://rhsaahawaii.org/scholarhips'><b>http://rhsaahawaii.org/scholarships</b></a>
                    <br/> The RAF seeks to support to RHS graduates through scholarship opportunities and a strong alumni network. We also help the current students of Roosevelt High School through campus beautification projects and grants.
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>Friends of Project Grad</Header>
                    <Image rounded src={projectGrad}/>
                    <br/><b>Friends of Roosevelt Project Grad (FRPG)</b>
                    <br/><a href='https://www.rooseveltpg.org/'><b>https://www.rooseveltpg.org/</b></a>
                    <br/>FRPG organizes an annual overnight event for graduating seniors. FRPG helps to keep seniors safe while continuing to provide a means for lasting memories.
                  </Grid.Column>
                </Grid>

                <br/><br/> <b>Donations</b>: All donations to RAF and FRPG are tax deductible.

                </Container>
              </Segment>

        </div>

    )
  }
}

export default Landing;
