import React from 'react';
import { Container, Col, Image, Form, Button } from 'react-bootstrap';
import '../style.css';

const auditorium = 'https://www.freewebs.com/rhsaahawaii/House%20from%20stage.JPG'

class Membership extends React.Component {
  render() {
    return (
        <Container style={{marginBottom: "180px"}} >
          <h1 className="scholarHeader">Membership</h1>
          {/*<Image src={auditorium} size='large' centered/>*/}
          <Form>
            <Form.Group controlId="formGridOptions">
              <Form.Label>Membership Option</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Annual: $5.00 USD - Yearly</option>
              </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Enter First Name"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Enter Last Name"/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter Phone Number"/>
              </Form.Group>
            </Form.Row>
            <p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_donations"/>
                <input type="hidden" name="business" value="rafhawaii@gmail.com"/>
                <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation"/>
                <input type="hidden" name="currency_code" value="USD"/>
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              </form>
            </p>
          </Form>
        </Container>
    )
  }
}

export default Membership;
