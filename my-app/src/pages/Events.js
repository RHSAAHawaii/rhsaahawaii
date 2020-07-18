import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import '../style.css';

const eventTest = 'https://www.freewebs.com/rhsaahawaii/80th%20Anniversary%20-%20Gary%20Dymally%20157.jpg';
const selfStorage = 'https://www.freewebs.com/rhsaahawaii/2012.10.28%20Hawaii%20Self%20Storage%20(BK)%20(1).JPG';

class Events extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div className='events'>
          <Header style={headerStyle} textAlign='center' inverted>Events</Header>
          <Segment>
            <Image src={eventTest} centered size='large'/>
            <Image src={selfStorage} centered size='large'/>
          </Segment>

        </div>
    )
  }
}

export default Events;
