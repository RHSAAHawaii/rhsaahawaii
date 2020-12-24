import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class Footer extends React.Component {
  render() {
    return (
      <div className='pt-10' id='footer' style={{paddingTop:20, paddingBottom: 20}}>
        <Row className="justify-content-md-center">

          <Col className='col-5 text-right'>
            <Image src={srcRHSLogo} width='100' height='100'/>
          </Col>

          <Col className='text-light'>
            <p className='footerText'>Roosevelt High School Alumni Association</p>
            <p className='footerText'>Roosevelt Alumni Foundation</p>
            <p className='footerText'>P.O. Box 23424</p>
            <p className='footerText'>Honolulu, HI 96823-3424</p>
            <p>rhsaa.hawaii@gmail.com | rafhawaii@gmail.com</p>
          </Col>
        </Row>

        <Row style={{marginTop: 30}}>
          <Col className='text-center text-light'>
          <p className='font-italic footerText'>This is the official website of the Roosevelt High School Alumni Association (RHSAA) / Roosevelt Alumni Foundation (RAF), which is a non profit organization in accordance with U.S. Internal Revenue Code</p>
          <p className='font-italic'>RHSAA 2020, All Rights Reserved</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;
