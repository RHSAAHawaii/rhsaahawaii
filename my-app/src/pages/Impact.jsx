import React from 'react';
import '../style.css';
import RooseveltFront from '../images/RooseveltFront.jpg';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';

class Impact extends React.Component {

  render() {
    return (
        <div>
          <div className="d-flex align-items-center rooseveltFront">
            <div
                className="container impactTransparentTitleBox text-center p-5 animate__animated animate__fadeIn">
              <h1>Roosevelt Alumni Foundation</h1>
            </div>
          </div>

          <Container>
            <Row>
              <Col sm="4" className="bg-light mt-5 p-5">
                <h1 className="impactSubheaders">Get Involved</h1>
                <hr className="yellowHr"/>
                <p className="mt-4">
                  Membership <br/>
                  Events <br/>
                  Donate
                </p>
              </Col>
              <Col className="impactYellowBox mt-5 p-5" sm="8">
                <h1 className="impactSubheaders">Origins</h1>
                <hr className="redHr"/>
                <p className="mt-4">The Roosevelt High School Alumni Association ("RHSAA") was originally chartered in
                  1975 as Rough Riders
                  - Hawaii. In 1979, the name was officially changed to RHSAA. In 1993, the Roosevelt Alumni Foundation
                  ("RAF") was formed and obtained a non-profit designation - 501c(3), from the Internal Revenue Service
                  in
                  1996, making all donations to the RAF tax deductible.</p>
              </Col>
            </Row>
          </Container>

          <Container className="p-3 mt-5">
            <h1 className="impactSubheaders">Fellowship</h1>
            <p className="lead">The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship among
              its members in order to rekindle and strengthen ties to our alma mater and each other by publishing
              newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for
              alumni.</p>
            <h1 className="impactSubheaders" style={{ marginTop: 50 }}>Scholarship</h1>
            <p className="lead">
              The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt
              High School who demonstrate ability, desire and have a financial need to pursue academic, trade or
              vocational school goals in Hawaii.
              In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High
              School by providing grants to support the school. Our projects include campus beautification and other
              needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal
              sponsor, all donations to FRPG, are also tax deductible.
            </p>

            <h1 className='impactSubheaders'>Contact</h1>
            <p className="lead" style={{ marginBottom: 50 }}>
              If you want to subscribe to our newsletter or share information about your class/classmates, please
              download the membership application below and join the RHSAA. E-mail your favorite memories at Roosevelt
              to our Newsletter Editor- Pualani Good '60 at: rhsaa.hawaii@gmail.com
            </p>
          </Container>
        </div>
    );

  }

}

export default Impact;
