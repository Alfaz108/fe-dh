import { Col, Row } from "react-bootstrap";
import LayoutOfDashboard from "./Analysis/LayoutOfDashboard";

const Dashboard = () => {
  return (
    <div>
      <Row className="m-1">
        <Col xs={24}>
          <div>
            <LayoutOfDashboard></LayoutOfDashboard>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
