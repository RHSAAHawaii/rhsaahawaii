import React from 'react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import scholars from '../data/scholars.json'
import _ from 'underscore/underscore-esm';

import {
  Accordion,
  Card,
  Button,
  Container,
  Image,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';
// import Accordions from '../components/Accordions';

class Scholarships extends React.Component {

  render() {

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
          <Container>
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

            {/*I DONT KNOW HOW TO USE THE COMPONENT TO RENDER ALL THE STUFF FOR THE ACCORDION HELP PLEASE */}
            {/*{scholars.map((current, index) => <Accordions key={index} item={current}/>)}*/}

            <Accordion defaultActiveKey="0">

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">2020</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      {scholars.filter(scholar => scholar.Class === 2020).map((scholar) => (<li>
                        {scholar.firstName} {scholar.lastName}, {scholar.Amount}, {scholar.College}
                        </li>))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">2019</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      {scholars.filter(scholar => scholar.Class === 2019).map((scholar) => (<li>
                        {scholar.firstName} {scholar.lastName}, {scholar.Amount}, {scholar.College}
                      </li>))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">2018</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      {scholars.filter(scholar => scholar.Class === 2018).map((scholar) => (<li>
                        {scholar.firstName} {scholar.lastName}, {scholar.Amount} ({scholar.Scholarship}), {scholar.College}
                      </li>))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">2017</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      {scholars.filter(scholar => scholar.Class === 2013).map((scholar) => (<li>
                        {scholar.firstName} {scholar.lastName}, {scholar.Amount}, {scholar.College}
                      </li>))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </Container>
        </div>
    )
  }
}

export default Scholarships;