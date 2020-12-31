import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import PhotoGroupLei from '../images/events/grouplei.jpg';
import PhotoSelfStorage from '../images/events/selfStorage.jpg';
import '../style.css';

class Events extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div className='events'>
          <Container><h1 className='scholarHeader'>Events</h1></Container>
          <Image src={PhotoGroupLei} />
          <Image src={PhotoSelfStorage} />
          <div className='responsiveCal'>
            <iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffabab&amp;ctz=Pacific%2FHonolulu&amp;src=ZnRrZXJ2cWc5NjE3N3JhbWpocGNibWdhazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB" style={{border:'solid 1px #777'}} width="800" height="400" frameborder="0" scrolling="no"></iframe>
           </div>
        </div>
        
    )
  }
}

export default Events;
