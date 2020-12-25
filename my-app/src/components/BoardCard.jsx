import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';

class BoardCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem', height: '30rem' }} className='mx-2 my-2'>
          <Card.Img variant="top" src={this.props.boardInfo.picture} />
          <Card.Body>
           <Card.Title >{this.props.boardInfo.name}</Card.Title>
            <Card.Footer>{this.props.boardInfo.role}</Card.Footer>
            <Card.Footer>Class of {this.props.boardInfo.graduatingClass}</Card.Footer>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

BoardCard.propTypes = {
  boardInfo: PropTypes.object.isRequired,
};

export default BoardCard;