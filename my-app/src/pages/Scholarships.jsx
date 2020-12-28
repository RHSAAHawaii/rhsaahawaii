import React from 'react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import scholars from '../data/scholars.json';
import _ from 'underscore/underscore-esm';
import ScholarAccord from '../components/ScholarAccord';
import {
  Accordion,
  Container,
  Image,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';

class Scholarships extends React.Component {
  render() {
    const arrayInfo = (_.groupBy(scholars, 'Class'));
    return (
        <div>
          <h1 className="impactHeader">Scholarships</h1>
          <Jumbotron>
            <Container>
              <Row>
                <Col><Image rounded width={400} height={300} src={scholarshipPhoto}/></Col>
                <Col>
                  <p>We seek to provide financial aid to
                    graduates of Roosevelt High School
                    who demonstrate the ability, desire,
                    and have a financial need to be met in order to pursue academic, trade or vocational
                    school goals. The Roosevelt Alumni Foundation has contributed over $70,000 in
                    scholarships to both hard-working and
                    need-based students (not necessarily determined by federal guidelines).
                    In 2016, with the assistance of the Roosevelt Alumni Foundation,
                    the Class of 1961 and the Friends of Red & Gold, we
                    awarded 10 scholarships for a total of $10,000!
                  </p></Col>
              </Row>
            </Container>
          </Jumbotron>
          <Container style={{marginBottom: 25}}>
            <h2 style={{ marginTop: "50px" }}>Scholarship Requirements</h2>
            <ul>
              <li>Be cool</li>
              <li>Stay in school</li>
              <li>To be a graduating student or graduate of Roosevelt High School</li>
              <li>Submit evidence of acceptance into an accredited institution of higher learning.
                This includes institutions that offer courses for study of a trade of a trade or vocation.
              </li>
            </ul>
            <h2 style={{ marginTop: "50px" }}>Past Scholarship Winners</h2>
            <Accordion defaultActiveKey='0'>
              {_.map(arrayInfo, (current, index)=> <ScholarAccord classInfo={index}
              scholarInfo={current} />).reverse()}
            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Scholarships;