import React from 'react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import { Accordion, Card, Button, Container, Image, Figure, Row, Col, DropdownButton } from 'react-bootstrap';

class Scholarships extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px', textAlign: 'center', padding: '30px' };
    const descript = {};

    return (
        <div>
          <h1 style={headerStyle}>Scholarships</h1>
          <Container>
            <Row>
              <Col><Image width={400} height={300} src={scholarshipPhoto}/></Col>
              <Col><p>We seek to provide financial aid to graduates of Roosevelt High School who demonstrate the ability, desire,
                and have a financial need to be met in order to pursue academic, trade or vocational school goals.
                The Roosevelt Alumni Foundation has contributed over $70,000 in scholarships to both hard-working and
                need-based students (not necessarily determined by federal guidelines).
                In 2016, with the assistance of the Roosevelt Alumni Foundation, the Class of 1961 and the
                Friends of Red & Gold, we awarded 10 scholarships for a total of $10,000!
              </p></Col>
            </Row>

            <Row>

            </Row>

            <h2>Scholarship Requirements</h2>
            <ul>
              <li>To be a graduating student or graduate of Roosevelt High School</li>
              <li>Submit evidence of acceptance into an accredited institution of higher learning.
                This includes institutions that offer courses for study of a trade of a trade or vocation.
              </li>
            </ul>

            <h2>Past Scholarship Winners</h2>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    2016 RAF Scholarship Winners
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>Yuwen Hu, $1,000 University of San Francisco</li>
                      <li>Arong Lee, $1,000 Whitman College</li>
                      <li>Kevin Liu, $1,000 University of Hawaii, Manoa</li>
                      <li>Xiaofei Mai, $1,000 University of Hawaii, Manoa</li>
                      <li>Gha Ming Ng, $1,000 Western Oregon University</li>
                      <li>Kim Yen Nguyen, $1,000 University of Hawaii, Manoa</li>
                      <li>Itsuka Nomi, $1,000 University of Hawaii, Manoa</li>
                      <li>Yingyin Pang, $1,000 University of Hawaii, Manoa</li>
                      <li>Rachelle Anne Silao, $1,000 Chaminade University</li>
                      <li>Lynda Valen, $1,000 University of Hawaii, Manoa</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    2015 Class of '62 and Class of '64
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>Joanne Huang, $1,000, Lehigh University</li>
                      <li>Chin Huynh, $1,000, Gonzaga University</li>
                      <li>Kaohi Kapiko, $1,000,Gonzaga University</li>
                      <li>Kristen Kaulia, $1,500, Eastern Washington University</li>
                      <li>Jake Kawasaki, $1,000, Santa Clara University</li>
                      <li>Tammy Ko, $1,000, University of Southern California</li>
                      <li>Kristen Kojima, $1,000, Creighton University</li>
                      <li>Colleen Lau, $1,000, University of Hawaii, Manoa</li>
                      <li>Alicia Leong, $1,000, University of Hawaii, Manoa</li>
                      <li>Jason Lin, $1,000, American University</li>
                      <li>Aaron Miyasato, $1,000, University of Washington</li>
                      <li>Brenda Nguyen, $1,000, University of Hawaii, Manoa</li>
                      <li>Stephen Radkov, $500, Honolulu Community College</li>
                      <li>Germiniano Sarmiento III, $1,000, Willamette University</li>
                      <li>Kai Tsubota, $1,500, Whitman University</li>
                      <li>Connie Wong, $1,000, University of Hawaii, Manoa</li>
                      <li>Yanna Xian, $1,000, Creighton University</li>
                      <li>Hinman Zhou, $1,100, Creighton University</li>
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