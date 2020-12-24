import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class Footer extends React.Component {
  render() {
    return (
      <div className='mt-auto' id='footer'>
      <Container className="font-small pt-4 pb-4">
        <Row><h1 className='mx-auto'>Hello</h1></Row>
      </Container>
      </div>
    )
  }
}

export default Footer;
