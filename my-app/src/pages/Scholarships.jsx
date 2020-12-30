import React from 'react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import maxH from '../images/MaxwellHiga.jpg';
import calyxB from '../images/CalyxBadon.jpg';
import lakotaN from '../images/LakotaNguyen.jpg';
import scholars from '../data/scholars.json';
import _ from 'underscore/underscore-esm';
import ScholarAccord from '../components/ScholarAccord';
import {
  Accordion,
  Container,
  Image,
  Row,
  Col,
  Jumbotron, Carousel
} from 'react-bootstrap';

class Scholarships extends React.Component {
  render() {
    const arrayInfo = (_.groupBy(scholars, 'Class'));
    const subHeaders = { textAlign: "center" };

    return (
        <div>
          <h1 className="impactHeader">Scholarships</h1>
          <Jumbotron>
            <Container>
              <Row>
                <Col><Image rounded width='100%' src={scholarshipPhoto}/></Col>
                <Col>
                  <p style={{fontSize: 20}}>We seek to provide financial aid to
                    graduates of Roosevelt High School
                    who demonstrate the ability, desire,
                    and have a financial need to be met in order to pursue academic, trade or vocational
                    school goals.
                  </p>
                  <br/>
                  <p style={{fontSize: 20}}>The Roosevelt Alumni Foundation has contributed over $70,000 in
                    scholarships to both hard-working and
                    need-based students (not necessarily determined by federal guidelines).
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <Container style={{ marginBottom: 25 }}>
            <Row>
              <Col>
                <h2 style={subHeaders}>Scholarship Requirements</h2>
                <ul>
                  <li>Be cool</li>
                  <li>Stay in school</li>
                  <li>Be a graduating student or graduate of Roosevelt High School</li>
                  <li>Submit evidence of acceptance into an accredited institution of higher learning.
                    This includes institutions that offer courses for study of a trade of a trade or vocation.
                  </li>
                </ul>
              </Col>
              <Col>
              {/* Something here ?*/}
              </Col>
              <Col>
                <h2 style={subHeaders}>Recent Recipients</h2>
                <Carousel>
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={calyxB}
                    />
                    <Carousel.Caption>
                      <p>Calyx Badon</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={lakotaN}
                    />
                    <Carousel.Caption>
                      <p>Lakota Nguyen</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={maxH}
                    />
                    <Carousel.Caption>
                      <p>Maxwell Higa</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <h2 style={{ marginTop: 50 }}>Past Scholarship Winners</h2>
            <Accordion defaultActiveKey='0'>
              {_.map(arrayInfo, (current, index) => <ScholarAccord classInfo={index}
                                                                   scholarInfo={current}/>).reverse()}
            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Scholarships;