import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class Footer extends React.Component {
  render() {
    return (
        <div className='footer'>
          <Segment inverted >
            <Grid centered container>
              <Grid.Column width={3}>
                <Image src={srcRHSLogo} size='small'/>
              </Grid.Column>
              <Grid.Column width={5}>
                <Grid.Row centered>
                  <br/>
                  Roosevelt High School Alumni Association<br/>
                  Roosevelt Alumni Foundation<br/>
                  P.O.  Box 23424<br/>
                  Honolulu, HI    96823-3424<br/>
                </Grid.Row>
                <Grid.Row centered>
                  rhsaa.hawaii@gmail.com | rafhawaii@gmail.com
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Segment>

        </div>

    )
  }
}

export default Footer;
