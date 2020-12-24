import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class NavBar extends React.Component {
  render() {
    const titleStyle = { padding: '10px 10px 10px 0', fontSize: '22px' };
    return (
      <Navbar bg="light" expand="lg" rounded style={titleStyle}>
        <Navbar.Brand as={NavLink} exact to='/'>
          <img alt="Roosevelt Logo" src={srcRHSLogo}
          width="30"
          height="30"
          style={{marginLeft:10}}
          className="d-inline-block align-top"
          />
          {' '}Roosevelt Alumni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        </Nav>

        <Nav className='ml-auto'>
          <Nav.Link as={NavLink} exact to='/impact'>Impact</Nav.Link>
          <Nav.Link as={NavLink} exact to='/events'>Events</Nav.Link>
          <Nav.Link as={NavLink} exact to='/members'>Members</Nav.Link>
          <Nav.Link as={NavLink} exact to='/board'>Board</Nav.Link>
          <Nav.Link as={NavLink} exact to='/donate'>Donate</Nav.Link>
          <Nav.Link as={NavLink} exact to='/scholarships'>Scholarships</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;
