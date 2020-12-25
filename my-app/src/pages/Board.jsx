import React from 'react';
import BoardCard from '../components/BoardCard';
import boardJson from '../data/board.json'
import { CardDeck, Container } from 'react-bootstrap'
import '../style.css';

class Board extends React.Component {
  render() {
    return (
        <Container>
          <CardDeck>
          {boardJson.map( (current, index) => <BoardCard key={index} boardInfo={current}/>)}
          </CardDeck>
        </Container>
    )
  }
}

export default Board;
