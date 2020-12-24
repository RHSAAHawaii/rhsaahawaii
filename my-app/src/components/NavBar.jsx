import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';
const options = [
  { key: 1, text: 'Class Reunions', value: 1 },
  { key: 2, text: 'Fundrasing', value: 2 },
  { key: 3, text: 'Community Service', value: 3 },
]

class NavBar extends React.Component {
  render() {
    const titleStyle = { padding: '10px 10px 10px 0', fontSize: '22px' };
    return (
      <>
      <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img alt="Roosevelt Logo" src={srcRHSLogo} width="30" height="30" 
          className="d-inline-block align-top"
          />
          Roosevelt Alumni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to='/impact'>Impact</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </>
    )
  }
}

export default NavBar;
