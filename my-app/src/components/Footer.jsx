import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../style.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='pt-10' id='footer' style={{paddingTop:20, paddingBottom: 20}}>
        <Row className="justify-content-md-center">

          <Col className='col-5 text-right'>
            <Image src={'https://media.discordapp.net/attachments/755318856917975061/792002521379635200/logo_seal.png'} width='100' height='120'/>
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
