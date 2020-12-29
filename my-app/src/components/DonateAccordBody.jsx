import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import { Container } from 'react-bootstrap';


class DonateAccordBody extends React.Component {
  render() {
    return (

        <Container>
          <li>
            {this.props.info.lastName}, {" "}
            {this.props.info.firstName}, {" "}
            {this.props.info.Amount} {" "}
            ({this.props.info.Scholarship}), {" "}
            {this.props.info.College}
          </li>
        </Container>
    )
  }
}

DonateAccordBody.propTypes = {
  info: PropTypes.object.isRequired,
};

export default DonateAccordBody;
