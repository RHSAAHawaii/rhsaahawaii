import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" rounded id='navBar' shadow='lg'>
        <Navbar.Brand as={NavLink} exact to='/' className='whiteText' style={{fontSize: 23}}>
          <img alt="Roosevelt Logo" src={'https://media.discordapp.net/attachments/755318856917975061/792002521379635200/logo_seal.png'}
          width="40"
          height="45"
          style={{marginRight:10}}
          />
          Roosevelt Alumni
        </Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className='ml-auto' style={{fontSize: 22}}>
          <Nav.Link className='whiteText' as={NavLink} exact to='/impact'>Impact</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/events'>Events</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/members'>Membership</Nav.Link>
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
