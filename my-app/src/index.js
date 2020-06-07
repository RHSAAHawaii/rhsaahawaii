import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Segment, Grid } from 'semantic-ui-react';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless inverted>
          <Menu.Item><Image src={srcRHSLogo} size='tiny'/></Menu.Item>
          <Menu.Item>Events</Menu.Item>
          <Menu.Item>Impact</Menu.Item>
          <Menu.Item>Membership</Menu.Item>
          <Menu.Item>Board</Menu.Item>
          <Menu.Item>Events</Menu.Item>
          <Menu.Item>Donate</Menu.Item>
          <Menu.Item>Scholarships</Menu.Item>
        </Menu>
    )
  }
}

class RHSPicture extends React.Component {
  render() {
    return (
        <Image fluid src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/2-e1555871782433.jpg'}/>
    )
  }
}

class MiddleContent extends React.Component {
  render() {
    return (
        <Segment>
          <Container>
            The Roosevelt Alumni Foundation (RAF) raises funds to support our alma mater, President Theodore Roosevelt High School, in a variety of ways. These include offering annual scholarships to alumni. We also admit qualified applicants to the Roosevelt Hall of Fame. As a designated non-profit organization, donations to the RAF are tax deductible.

            <br/><br/>The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other by publishing newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for alumni.

            <br/><br/>In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High School by providing grants to support the school. Our projects include campus beautification and other needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal sponsor, all donations to FRPG, are also tax deductible.

            <br/><br/>The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt High School who demonstrate ability, desire and have a financial need to pursue academic, trade or vocational school goals in Hawaii.
          </Container>
        </Segment>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="rafhawaii@gmail.com" />
            <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class='footer'>
          <Segment inverted >
            <Grid container>
              <Grid.Row centered>
                Roosevelt High School Alumni Association<br/>
                Roosevelt Alumni Foundation<br/>
                P.O.  Box 23424<br/>
                Honolulu, HI    96823-3424<br/>
              </Grid.Row>
              <Grid.Row centered>
                rhsaa.hawaii@gmail.com | rafhawaii@gmail.com
              </Grid.Row>
            </Grid>
          </Segment>

        </div>

    )
  }
}

class RHSAAHawaii extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <RHSPicture/>
          <MiddleContent/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<RHSAAHawaii/>, document.getElementById('root'));