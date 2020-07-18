import React from 'react';
import { Header, Segment, Image, Container, List } from 'semantic-ui-react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';

class Scholarships extends React.Component {
  render() {
    return (
        <div>
          <Segment>
            <Container>
              <Header>Scholarships for Roosevelt Graduates</Header>
              We seek to provide financial aid to graduates of Roosevelt High School who demonstrate the ability, desire, and have a financial need to be met in order to pursue academic, trade or vocational school goals.
              <Image src={scholarshipPhoto} size='large' centered rounded/>
              The Roosevelt Alumni Foundation has contributed over $70,000 in scholarships to both hard-working and need-based students (not necessarily determined by federal guidelines).

              <Header>Scholarship Requirements</Header>
              <List bulleted>
                <List.Item>Be Cool</List.Item>
                <List.Item>Stay In School</List.Item>
              </List>

              <Header>2016 RAF Scholarship Winners</Header>
              In 2016, with the assistance of the Roosevelt Alumni Foundation, the Class of 1961 and the Friends of Red & Gold, we awarded 10 scholarships for a total of $10,000!

              2016 RAF
              <List bulleted>
                <List.Item>Kevin Liu, $1,000 University of Hawaii, Manoa</List.Item>
                <List.Item>Itsuka Nomi, $1,000 University of Hawaii, Manoa</List.Item>
                <List.Item>Lynda Valen, $1,000 University of Hawaii, Manoa</List.Item>
              </List>
              2016 RAF & Class of ‘61
              <List bulleted>
                <List.Item>Arong Lee, $1,000 Whitman College</List.Item>
                <List.Item>Kim Yen Nguyen, $1,000 University of Hawaii, Manoa</List.Item>
                <List.Item>Rachelle Anne Silao, $1,000 Chaminade University</List.Item>
              </List>

              2016 RAF Friends of Red & Gold
              <List bulleted>
                <List.Item>Yuwen Hu, $1,000 University of San Francisco</List.Item>
                <List.Item>Xiaofei Mai, $1,000 University of Hawaii, Manoa</List.Item>
                <List.Item>Gha Ming Ng, $1,000 Western Oregon University</List.Item>
                <List.Item>Xingyin Pang, $1,000 University of Hawaii, Manoa</List.Item>
              </List>

              2015 Class of '62 and Class of '64
              <List bulleted>
                <List.Item>Alicia Leong, $1,000, University of Hawaii, Manoa</List.Item>
                <List.Item>Stephen Radkov, $500, Honolulu Community College</List.Item>
                <List.Item>Connie Wong, $1,000, University of Hawaii, Manoa</List.Item>
                <List.Item>Kristen Kaulia, $1,500, Eastern Washington University</List.Item>
                <List.Item>Joanne Huang, $1,000, Lehigh University</List.Item>
                <List.Item>Chin Huynh, $1,000, Gonzaga University</List.Item>
                <List.Item>Kaohi Kapiko, $1,000,Gonzaga University</List.Item>
                <List.Item>Jake Kawasaki, $1,000, Santa Clara University</List.Item>
                <List.Item>Tammy Ko, $1,000, University of Southern California</List.Item>
                <List.Item>Kristen Kojima, $1,000, Creighton University</List.Item>
                <List.Item>Colleen Lau, $1,000, University of Hawaii, Manoa</List.Item>
                <List.Item>Jason Lin, $1,000, American University</List.Item>
                <List.Item>Aaron Miyasato, $1,000, University of Washington</List.Item>
                <List.Item>Brenda Nguyen, $1,000, University of Hawaii, Manoa</List.Item>
                <List.Item>Germiniano Sarmiento III, $1,000, Willamette University</List.Item>
                <List.Item>Yanna Xian, $1,000, Creighton University</List.Item>
                <List.Item>Hinman Zhou, $1,100, Creighton University</List.Item>
                <List.Item>Kai Tsubota, $1,500, Whitman University</List.Item>
              </List>
            </Container>
          </Segment>
        </div>
    )
  }
}

export default Scholarships;