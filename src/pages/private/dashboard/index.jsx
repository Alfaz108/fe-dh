import { Col, Row } from "react-bootstrap";
import LayoutOfDashboard from "./Analysis/LayoutOfDashboard";

const Dashboard = () => {
  return (
    <div>
      <Row className="">
        <Col>
          <div className="mx-3">
            <LayoutOfDashboard></LayoutOfDashboard>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
