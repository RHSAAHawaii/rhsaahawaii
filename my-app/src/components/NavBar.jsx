import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg='danger' expand="lg" rounded id='navBar'>
        <Navbar.Brand as={NavLink} exact to='/' className='font-effect-neon whiteText' style={{fontSize: 23}}>
          <img alt="Roosevelt Logo" src={'https://media.discordapp.net/attachments/755318856917975061/792002521379635200/logo_seal.png'}
          width="40"
          height="45"
          style={{marginRight:10}}
          />
          Roosevelt Alumni
        </Navbar.Brand>
        <Navbar.Toggle bg='light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        </Nav>

        <Nav className='ml-auto' style={{fontSize: 22}}>
          <Nav.Link className='whiteText' as={NavLink} exact to='/impact'>Impact</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/events'>Events</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/members'>Members</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/board'>Board</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/donate'>Donate</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/scholarships'>Scholarships</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;
