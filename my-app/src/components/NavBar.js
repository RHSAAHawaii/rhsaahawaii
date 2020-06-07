import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class NavBar extends React.Component {
  render() {
    const titleStyle = { padding: '10px', fontSize: '22px' };
    return (
        <Menu borderless inverted>
          <Container>
            <Menu.Item as={NavLink} activeClassName="" exact to='/' style={titleStyle}>
              <Image src={srcRHSLogo} size='mini'/>
              &nbsp;
              Roosevelt Alumni
            </Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/about' position='right' >Impact</Menu.Item>
            <Menu.Item as={NavLink} exact to='/about'>Events</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/about' >Membership</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/board'>Board</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/about'>Donate</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/about'>Scholarships</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

export default NavBar;
