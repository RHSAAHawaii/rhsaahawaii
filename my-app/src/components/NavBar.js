import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class NavBar extends React.Component {
  render() {
    return (
        <Menu borderless inverted>
          <Container>
            <Menu.Item><Image src={srcRHSLogo} size='mini'/></Menu.Item>
            <Menu.Item>Events</Menu.Item>
            <Menu.Item>Impact</Menu.Item>
            <Menu.Item>Membership</Menu.Item>
            <Menu.Item>Board</Menu.Item>
            <Menu.Item>Events</Menu.Item>
            <Menu.Item>Donate</Menu.Item>
            <Menu.Item>Scholarships</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

export default NavBar;
