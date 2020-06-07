import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class RHSAAHawaii extends React.Component {

  render() {
    return (
        <Container textAlign="center">
          <Header as='h1'>RHSAA Hawaii!</Header>
        </Container>
    );
  }
}

ReactDOM.render(<RHSAAHawaii/>, document.getElementById('root'));