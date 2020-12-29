import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';
import DonateAccordBody from './DonateAccordBody';
import _ from 'underscore/underscore-esm';

class DonateAccord extends React.Component {
  render() {
    return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={this.props.classInfo}>Class of {this.props.classInfo}</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.classInfo}>
                  <Card.Body>
                    {_.map(this.props.scholarInfo, (current, index) => <DonateAccordBody key={index} info={current}/> )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
    )
  } 
}

DonateAccord.propTypes = {
  scholarInfo: PropTypes.array.isRequired,
  classInfo: PropTypes.string.isRequired,
};

export default DonateAccord;
