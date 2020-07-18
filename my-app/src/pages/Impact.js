import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import '../style.css';

class Impact extends React.Component {
  render() {
    return (
        <div className='impact'>
          <Container>
            <Segment>
              <Header as='h1' textAlign='center'>Connecting and Supporting Rough Riders</Header>
              The Roosevelt Alumni Foundation (RAF) raises funds to support our alma mater, President Theodore Roosevelt High School, in a variety of ways. These include offering annual scholarships to alumni. We also admit qualified applicants to the Roosevelt Hall of Fame. As a designated non-profit organization, donations to the RAF are tax deductible.

              <br/><br/>The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other by publishing newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for alumni.

              <br/><br/>In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High School by providing grants to support the school. Our projects include campus beautification and other needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal sponsor, all donations to FRPG, are also tax deductible.

              <br/><br/>The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt High School who demonstrate ability, desire and have a financial need to pursue academic, trade or vocational school goals in Hawaii.
            </Segment>
          </Container>
        </div>

    )
  }
}

export default Impact;
