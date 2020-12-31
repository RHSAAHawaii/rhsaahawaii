import React from 'react';
import '../style.css';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';

class Impact extends React.Component {

  render() {
    return (
        <div>
          <Container><h1 className='scholarHeader'>ROOSEVELT ALUMNI FOUNDATION</h1></Container>
          <div className="rooseveltFront"><img style={{ height: "430px" }}/></div>

          <Container>
            <div>
              <h2 className='impactContent2'>Origins</h2>
              <p>
                The Roosevelt High School Alumni Association ("RHSAA") was originally chartered in 1975 as Rough Riders
                -
                Hawaii. In 1979, the name was officially changed to RHSAA. In 1993, the Roosevelt Alumni Foundation
                ("RAF") was formed and obtained a non-profit designation - 501c(3), from the Internal Revenue Service in
                1996, making all donations to the RAF tax deductible.
              </p>

              <h2 className='impactContent2'>Fellowship</h2>
              The Roosevelt High School Alumni Association (RHSAA) works toward developing a spirit of fellowship
              among
              its members in order to rekindle and strengthen ties to our alma mater and each other by publishing
              newsletters for its members and co-hosting with the RAF an annual ho’olaule’a – a get together for
              alumni.
            </div>

            <h2 className='impactContent2'>Scholarship</h2>
            <p>
              The purpose of the RAF’s scholarship program is to provide financial aid to graduates of Roosevelt
              High School who demonstrate ability, desire and have a financial need to pursue academic, trade or
              vocational school goals in Hawaii.
              In addition to offering scholarships to RHS graduates, the RAF also provides support to Roosevelt High
              School by providing grants to support the school. Our projects include campus beautification and other
              needs. The RAF adopted the Friends of Roosevelt Project Grad (“FRPG”) in 2007. As the group’s fiscal
              sponsor, all donations to FRPG, are also tax deductible.
            </p>

            <h2 className='impactContent2'>Contact</h2>
            <p>
              If you want to subscribe to our newsletter or share information about your class/classmates, please
              download the membership application below and join the RHSAA. E-mail your favorite memories at Roosevelt
              to our Newsletter Editor- Pualani Good '60 at: rhsaa.hawaii@gmail.com
            </p>
          </Container>
        </div>
    );

  }

}

export default Impact;
