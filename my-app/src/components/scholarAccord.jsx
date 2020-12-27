import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';

class ScholarAccord extends React.Component {
  render() {
    return (
       <Accordion.Collapse>
           <Card.Body>
               <ul>
                {/** Wip trying to figure out if I should make a map function for each bullet or each year */}
               </ul>
           </Card.Body>
       </Accordion.Collapse>
    )
  }
}

ScholarAccord.propTypes = {
  scholarInfo: PropTypes.object.isRequired,
};

export default ScholarAccord;
