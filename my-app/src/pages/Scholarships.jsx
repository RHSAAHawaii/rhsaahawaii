import React from 'react';
import { Segment, Image, List } from 'semantic-ui-react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import { Accordion, Card, Button, Container } from 'react-bootstrap';

class Scholarships extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px', textAlign: 'center' };

    return (
        <div>
          <h1 style={headerStyle}>Scholarships</h1>

            <Container>
              We seek to provide financial aid to graduates of Roosevelt High School who demonstrate the ability, desire,
              and have a financial need to be met in order to pursue academic, trade or vocational school goals.
              <Image src={scholarshipPhoto} size='large' centered rounded/>
              <p>The Roosevelt Alumni Foundation has contributed over $70,000 in scholarships to both hard-working and
                need-based students (not necessarily determined by federal guidelines).
              </p>
              <p>In 2016, with the assistance of the Roosevelt Alumni Foundation, the Class of 1961 and the
                Friends of Red & Gold, we awarded 10 scholarships for a total of $10,000!
              </p>
              <h2>Scholarship Requirements</h2>
              <List bulleted>
                <List.Item>To be a graduating student or graduate of Roosevelt High School</List.Item>
                <List.Item>Submit evidence of acceptance into an accredited institution of higher learning.
                  This includes institutions that offer courses for study of a trade of a trade or vocation.
                </List.Item>
              </List>

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
                      <List bulleted>
                        <List.Item>Yuwen Hu, $1,000 University of San Francisco</List.Item>
                        <List.Item>Arong Lee, $1,000 Whitman College</List.Item>
                        <List.Item>Kevin Liu, $1,000 University of Hawaii, Manoa</List.Item>
                        <List.Item>Xiaofei Mai, $1,000 University of Hawaii, Manoa</List.Item>
                        <List.Item>Gha Ming Ng, $1,000 Western Oregon University</List.Item>
                        <List.Item>Kim Yen Nguyen, $1,000 University of Hawaii, Manoa</List.Item>
                        <List.Item>Itsuka Nomi, $1,000 University of Hawaii, Manoa</List.Item>
                        <List.Item>Yingyin Pang, $1,000 University of Hawaii, Manoa</List.Item>
                        <List.Item>Rachelle Anne Silao, $1,000 Chaminade University</List.Item>
                        <List.Item>Lynda Valen, $1,000 University of Hawaii, Manoa</List.Item>
                      </List>
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
                      <List bulleted>
                        <List.Item>Joanne Huang, $1,000, Lehigh University</List.Item>
                        <List.Item>Chin Huynh, $1,000, Gonzaga University</List.Item>
                        <List.Item>Kaohi Kapiko, $1,000,Gonzaga University</List.Item>
                        <List.Item>Kristen Kaulia, $1,500, Eastern Washington University</List.Item>
                        <List.Item>Jake Kawasaki, $1,000, Santa Clara University</List.Item>
                        <List.Item>Tammy Ko, $1,000, University of Southern California</List.Item>
                        <List.Item>Kristen Kojima, $1,000, Creighton University</List.Item>
                        <List.Item>Colleen Lau, $1,000, University of Hawaii, Manoa</List.Item>
                        <List.Item>Alicia Leong, $1,000, University of Hawaii, Manoa</List.Item>
                        <List.Item>Jason Lin, $1,000, American University</List.Item>
                        <List.Item>Aaron Miyasato, $1,000, University of Washington</List.Item>
                        <List.Item>Brenda Nguyen, $1,000, University of Hawaii, Manoa</List.Item>
                        <List.Item>Stephen Radkov, $500, Honolulu Community College</List.Item>
                        <List.Item>Germiniano Sarmiento III, $1,000, Willamette University</List.Item>
                        <List.Item>Kai Tsubota, $1,500, Whitman University</List.Item>
                        <List.Item>Connie Wong, $1,000, University of Hawaii, Manoa</List.Item>
                        <List.Item>Yanna Xian, $1,000, Creighton University</List.Item>
                        <List.Item>Hinman Zhou, $1,100, Creighton University</List.Item>
                      </List>
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