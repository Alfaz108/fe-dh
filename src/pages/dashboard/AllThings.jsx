import React from "react";
// import { Grid, Row, Col } from "rsuite";

const AllThings = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}>
      <Grid fluid>
        <Row className="show-grid">
          {/* <Col sm={24}>xsHidden xs={24}</Col>
          <Col sm={24}>
            xs={24} xs={24}
          </Col> */}
        </Row>
      </Grid>
    </div>
  );
};

export default AllThings;
