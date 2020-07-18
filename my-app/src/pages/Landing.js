import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Segment, Modal, Button, Header, Grid, Icon } from 'semantic-ui-react';
import rhsPhoto from '../images/landing2.jpg';
import ogawa from '../images/headshot-ogawa.jpg';
import test from '../images/rhsaa-logo-test.jpg';
import projectGrad from '../images/projectgrad-temp.jpg';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

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
                    <Modal.Header>Will you support the Rough Rider Ohana?</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size='medium' src={ogawa} />
                      <Modal.Description>
                        <Header>Make Riders Successful.</Header>
                        <p>
                          Your donation will directly impact RHS students and alumni. Help to set them up for success through our scholarships, campus improvement projects, and grants to support classrooms.
                        </p>
                        <p>Donations are handled via PayPal using the yellow donate button below.</p>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                          <input type="hidden" name="cmd" value="_donations" />
                          <input type="hidden" name="business" value="rafhawaii@gmail.com" />
                          <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
                          <input type="hidden" name="currency_code" value="USD" />
                          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
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
                    <Header color='red'>RHS Alumni Association</Header>
                    <Image rounded src={projectGrad}/>
                    <br/>The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other by publishing newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for alumni.
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>Alumni Foundation</Header>
                    <Image rounded src={projectGrad}/>
                    <br/>The Roosevelt Alumni Foundation (RAF) raises funds to support our alma mater, President Theodore Roosevelt High School, in a variety of ways. These include offering annual scholarships to alumni. We also admit qualified applicants to the Roosevelt Hall of Fame. As a designated non-profit organization, donations to the RAF are tax deductible.
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>School Support</Header>
                    <Image rounded src={projectGrad}/>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header color='red'>Friends of Project Grad</Header>
                    <Image rounded src={projectGrad}/>
                  </Grid.Column>
                </Grid>

              <br/><br/>In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High School by providing grants to support the school. Our projects include campus beautification and other needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal sponsor, all donations to FRPG, are also tax deductible.

               <br/><br/>The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt High School who demonstrate ability, desire and have a financial need to pursue academic, trade or vocational school goals in Hawaii.

              <br/><br/>Roosevelt Alumni Foundation ("RAF")
              <br/><br/>The RAF provides support to Roosevelt High School ("RHS") by offering scholarships to RHS graduates who attend schools in Hawaii, as well as providing grants to support the school in various ways, including campus beautification and other needs.  The RAF also adopted the Friends of Roosevelt Project Grad ("FRPG") in 2007.  As the group's fiscal sponsor, all donations to FRPG, are also tax deductible.

              <br/><br/>Roosevelt High School Alumni Association ("RHSAA")
              <br/><br/>The Roosevelt High School Alumni Association ("RHSAA") was originally chartered in 1975 as Rough Riders -  Hawaii.  In 1979, the name was officially changed to RHSAA.   In 1993, the Roosevelt Alumni Foundation ("RAF") was formed and obtained a non-profit designation - 501c(3), from the Internal Revenue Service in 1996, making all donations to the RAF tax deductible.

              <br/><br/>If you want to subscribe to our newsletter or share information about your class/classmates, please download the membership application below and join the RHSAA.   E-mail your favorite memories at Roosevelt to our Newsletter Editor- Pualani Good '60 at: rhsaa.hawaii@gmail.com
                </Container>
              </Segment>

        </div>

    )
  }
}

export default Landing;