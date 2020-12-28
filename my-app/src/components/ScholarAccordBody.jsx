import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

class ScholarAccordBody extends React.Component {
  render() {
    return (
        <li>
            {this.props.info.lastName}, {" "}
            {this.props.info.firstName}, {" "}
            {this.props.info.Amount} {" "}
            ({this.props.info.Scholarship}), {" "}
          {this.props.info.College}
        </li>
    )
  }
}

ScholarAccordBody.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ScholarAccordBody;
