import React from "react";
import { Grid, Row, Col } from "rsuite";

const AllThings = () => {
  return (
    <div>
      <Grid fluid>
        <Row className="show-grid">
          <Col sm={12}>xsHidden xs={12}</Col>
          <Col sm={12}>
            xs={12} xs={12}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default AllThings;
