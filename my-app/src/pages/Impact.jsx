import React from 'react';
import '../style.css';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import RooseveltFront from '../images/RooseveltFront.jpg';

class Impact extends React.Component {
  render() {
    return (
            <div>
              <Container><h1 className='scholarHeader'> About Roosevelt Alumni Foundation</h1></Container>
              <Jumbotron>
                <Container>
                  <Row>
                    <Col className='col-5'>
                    <p style={{fontSize:20}}>
                    The Roosevelt Alumni Foundation (RAF) raises funds to support our alma mater, 
                    President Theodore Roosevelt High School, in a variety of ways. These include offering annual scholarships to alumni.
                     We also admit qualified applicants to the Roosevelt Hall of Fame. As a designated non-profit organization,
                      donations to the RAF are tax deductible.
                    </p>
                    </Col>
                    <Col className='col-7'>
                      <Image rounded width='70%' src={RooseveltFront}/>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
  
              <Container>
                <h2 className='scholarHeader'>Fellowship</h2>
              <p style={{fontSize:20}}>
                The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other by publishing newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for alumni.
              </p>
              </Container>

              <Container>
                <h2 className='scholarHeader'>Scholarship</h2>
                <p style={{fontSize:20}}>
                  In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High School by providing grants to support the school. Our projects include campus beautification and other needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal sponsor, all donations to FRPG, are also tax deductible.
                </p>
              <p style={{fontSize:20}}>
                The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt High School who demonstrate ability, desire and have a financial need to pursue academic, trade or vocational school goals in Hawaii.
              </p>
              </Container>

              <Container>
                <h2 className='scholarHeader'>Origins</h2>
                <p style={{fontSize:20}}>
                  The Roosevelt High School Alumni Association ("RHSAA") was originally chartered in 1975 as Rough Riders -  Hawaii.  In 1979, the name was officially changed to RHSAA.   In 1993, the Roosevelt Alumni Foundation ("RAF") was formed and obtained a non-profit designation - 501c(3), from the Internal Revenue Service in 1996, making all donations to the RAF tax deductible.
                </p>
              </Container>
  
              <Container>
                <h2 className='scholarHeader'>Contact</h2>
                <p style={{fontSize:20}}>
                  If you want to subscribe to our newsletter or share information about your class/classmates, please download the membership application below and join the RHSAA.   E-mail your favorite memories at Roosevelt to our Newsletter Editor at: <b>rhsaa.hawaii@gmail.com</b>
                </p>
              </Container>
            </div>
    )
  }
}

export default Impact;
