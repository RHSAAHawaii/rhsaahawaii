import React from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import '../style.css';

class PresidentMessage extends React.Component {
  render() {
    return (
        <div>
      <Segment>
        <Header>Message from the President</Header>
        <Image src={'../images/headshot-ogawa.jpg'} size='large'/>
      </Segment>
        </div>
    )
  }
}

export default PresidentMessage;
