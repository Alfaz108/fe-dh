import { Card, Col, Row, Table, Button } from "react-bootstrap";
import Analysis from "./Analysis";

const Dashboard = () => {
  return (
    <Row>
      <Col xs={24}>
        <div>
          <Analysis></Analysis>
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
