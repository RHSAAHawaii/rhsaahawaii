import React from 'react';
import { Header, Container, Card, Image, Segment } from 'semantic-ui-react';
import '../style.css';
import ogawa from '../images/headshot-ogawa.jpg';

class Board extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div className='footer'>
          <Header style={headerStyle} textAlign='center' inverted>Meet the Board</Header>
          <Segment color='grey' inverted>
          <Container>
            <Card.Group centered>
              <Card>
                <Image src={ogawa} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Garrett Y. Ogawa</Card.Header>
                  <Card.Description>
                    President
                  </Card.Description>
                  <Card.Meta>
                    Class of ’76
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/site/wp-content/uploads/2019/04/Sadie-Oshiro-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Sadie C.F. Yuen Oshiro</Card.Header>
                  <Card.Description>
                    1st Vice President
                  </Card.Description>
                  <Card.Meta>
                    Class of ’62
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/site/wp-content/uploads/2019/04/Gladys-Karr-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Gladys M. Karr</Card.Header>
                  <Card.Description>
                    2nd Vice President
                  </Card.Description>
                  <Card.Meta>
                    <span>Class of ’62</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/site/wp-content/uploads/2019/04/Carol-Hopkins-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Carol K. Y. Ferwerda Hopkins</Card.Header>
                  <Card.Description>
                    Corresponding Secretary
                  </Card.Description>
                  <Card.Meta>
                    Class of ’61
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/site/wp-content/uploads/2019/04/Leona-Kobashigawa-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Leona M. Chow Kobashigawa</Card.Header>
                  <Card.Description>
                    Recording Secretary
                  </Card.Description>
                  <Card.Meta>
                    Class of ’76
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/site/wp-content/uploads/2019/04/Leila-Tamashiro-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Leila K. Otsuka Tamashiro</Card.Header>
                  <Card.Description>
                    Treasurer
                  </Card.Description>
                  <Card.Meta>
                    Class of ’67
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/logo2-150x150.png'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Rodney Chai</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of ’60
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/logo2-150x150.png'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Vernon Kaahanui Sr.</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of  ’62
                  </Card.Meta>
                </Card.Content>
              </Card><Card>
              <Image src={'http://rhsaahawaii.org/wp-content/uploads/2020/02/barbarakoja-150x150.jpg'} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Barbara Koja Lau</Card.Header>
                <Card.Description>
                  Board Member
                </Card.Description>
                <Card.Meta>
                  Class of ’80
                </Card.Meta>
              </Card.Content>
            </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/logo2-150x150.png'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>John Luiz</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of ’92
                  </Card.Meta>
                </Card.Content>
              </Card><Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/logo2-150x150.png'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Aaron Lum</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of ’91
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2020/02/laurenfukuda-150x150.jpg'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Lauren Fukuda Nadolski</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of ’86
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src={'http://rhsaahawaii.org/wp-content/uploads/2019/04/logo2-150x150.png'} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Aileen Inaba Wada</Card.Header>
                  <Card.Description>
                    Board Member
                  </Card.Description>
                  <Card.Meta>
                    Class of ’60
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          </Segment>
        </div>
    )
  }
}

export default Board;
