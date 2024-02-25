import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardOfDaashboard from "./CardOfDaashboard";
import CalendarOfDashboard from "./CalendarOfDashboard";
import AnalysisOfDashboard from "./AnalysisOfDashboard";
import HireOfDashboard from "./HireOfDashboard";
import TableOfDashboard from "./TableOfDashboard";
import Application from "./Application";

const LayoutOfDashboard = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={7}>
          <CardOfDaashboard></CardOfDaashboard>
          <HireOfDashboard></HireOfDashboard>
          <AnalysisOfDashboard></AnalysisOfDashboard>
          <TableOfDashboard></TableOfDashboard>
        </Col>
        <Col className="" xs={12} md={5}>
          <CalendarOfDashboard></CalendarOfDashboard>
          <Application></Application>
        </Col>
      </Row>
    </div>
  );
};

export default LayoutOfDashboard;
