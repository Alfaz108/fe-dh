import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Progress } from "rsuite";
const AnalysisOfDashboard = () => {
  const style = {
    width: 70,
    display: "inline-block",
    marginRight: 10,
  };
  return (
    <div class="row row-cols-1 row-cols-md-2 g-3 mb-3">
      <div class="col">
        <div class="card">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center p-2">
              <div className="display-4 px-3 fw-bold">3</div>
              <div className="pt-3" style={{ lineHeight: "2px" }}>
                <p className="fw-bold fs-6">Content</p>
                <p className="fw-bold fs-6">Designer</p>
                <p className="form-text">(5 Candidates)</p>
              </div>
            </div>
            <div style={style}>
              <Progress.Circle percent={75} strokeColor="#4849FF" />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center p-2">
                <div className="display-4 px-3 fw-bold">1</div>
                <div className="pt-3" style={{ lineHeight: "2px" }}>
                  <p className="fw-bold fs-6">Senior UI</p>
                  <p className="fw-bold fs-6">Designer</p>
                  <p className="form-text">(0 Candidates)</p>
                </div>
              </div>
              <div style={style}>
                <Progress.Circle percent={70} strokeColor="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center p-2">
                <div className="display-4 px-3 fw-bold">9</div>
                <div className="pt-3" style={{ lineHeight: "2px" }}>
                  <p className="fw-bold fs-6">Node.js</p>
                  <p className="fw-bold fs-6">Developers</p>
                  <p className="form-text">(12 Candidates)</p>
                </div>
              </div>
              <div style={style}>
                <Progress.Circle percent={80} strokeColor="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center p-2">
                <div className="display-4 px-3 fw-bold">2</div>
                <div className="pt-3" style={{ lineHeight: "2px" }}>
                  <p className="fw-bold fs-6">Marketing</p>
                  <p className="fw-bold fs-6">Managers</p>
                  <p className="form-text">(10 Candidates)</p>
                </div>
              </div>
              <div style={style}>
                <Progress.Circle percent={50} strokeColor="#ffc107" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisOfDashboard;
