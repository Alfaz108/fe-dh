import { Card, Col, Row, Table, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <div className="table-responsive">
              <Table striped bordered hover className="text-center">
                <thead className="thead-primary ">
                  <tr>
                    <th>TLD</th>
                    <th>Duration</th>
                    <th>Registration</th>
                    <th>Renewal</th>
                    <th>Transfer</th>
                    <th>Register</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>.com</td>
                    <td>1 Year</td>
                    <td>$70.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>.net</td>
                    <td>1 Year</td>
                    <td>$75.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>.org</td>
                    <td>1 Year</td>
                    <td>$65.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>.biz</td>
                    <td>1 Year</td>
                    <td>$60.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>.info</td>
                    <td>1 Year</td>
                    <td>$50.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0">.me</td>
                    <td className="border-bottom-0">1 Year</td>
                    <td className="border-bottom-0">$45.00</td>
                    <td className="border-bottom-0">$5.00</td>
                    <td className="border-bottom-0">$5.00</td>
                    <td className="border-bottom-0">
                      <Button variant="primary">Sign Up</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
