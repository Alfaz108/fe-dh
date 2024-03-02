import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import UploadImg from "./UploadImg";

const MyProfile = () => {
  return (
    <div style={{ height: "auto" }} className="my-5">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <div className="mb-sm-2">
              <Card>
                <div className="mx-auto pt-2">
                  <UploadImg />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="card ">
              <h3 className="p-3">Here your information</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis accusantium rem tempora facilis, laborum vitae fugit
                dolore voluptate dolor maxime unde sunt, natus perferendis optio
                labore eos veniam praesentium asperiores, doloribus architecto
                necessitatibus consectetur quo cum! Blanditiis, quis vero quo
                pariatur cumque fugiat totam non, consectetur nobis assumenda
                harum earum hic dicta ratione debitis, doloremque eius
                voluptates vitae consequuntur ipsa quod soluta? Debitis, illo
                veritatis? Temporibus doloribus consectetur a neque illum
                praesentium iste.
              </p>
              <button className="btn btn-primary m-3 w-25">Click Here</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
