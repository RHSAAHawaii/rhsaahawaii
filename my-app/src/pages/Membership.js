import React from 'react';
import { Form, Header, Image, Segment } from 'semantic-ui-react';
import '../style.css';

class Membership extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div className='membership'>
          <Header style={headerStyle} textAlign='center' inverted>Membership</Header>
          <Segment>
            ayyy x2
          </Segment>
        </div>
    )
  }
}

export default Membership;
