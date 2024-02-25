import React from "react";
import Table from "react-bootstrap/Table";
import { Badge } from "rsuite";

const TableOfDashboard = () => {
  return (
    <div
      style={{ borderRadius: " 10px", backgroundColor: "#ffffff" }}
      className="p-3 mb-3">
      <div className="d-flex justify-content-between py-3">
        <div>
          <h5>Recruitment Progress</h5>
        </div>
        <div>
          <button className="btn btn-sm btn-primary px-3">see all</button>
        </div>
      </div>
      <Table className="table table-borderless ">
        <thead>
          <tr>
            <th>Full name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfaz Rumon</td>
            <td>Web Developer</td>
            <td>
              {" "}
              <Badge className="mx-1" color="red" />
              Tec Interview
            </td>
            <td style={{ cursor: "pointer" }}>┋</td>
          </tr>
          <tr>
            <td>Maruf Bellah</td>
            <td>Web Designer</td>
            <td>
              {" "}
              <Badge className="mx-1" color="blue" />
              Tec Interview
            </td>
            <td style={{ cursor: "pointer" }}>┋</td>
          </tr>
          <tr>
            <td>Maruf Bellah</td>
            <td>Web Designer</td>
            <td>
              {" "}
              <Badge className="mx-1" color="yellow" />
              Tec Interview
            </td>
            <td style={{ cursor: "pointer" }}>┋</td>
          </tr>
          <tr>
            <td>Maruf Bellah</td>
            <td>Web Designer</td>
            <td>
              {" "}
              <Badge className="mx-1" color="green" />
              Tec Interview
            </td>
            <td style={{ cursor: "pointer" }}>┋</td>
          </tr>
          <tr>
            <td>Maruf Bellah</td>
            <td>Web Designer</td>
            <td>
              {" "}
              <Badge className="mx-1" color="orange" />
              Tec Interview
            </td>
            <td style={{ cursor: "pointer" }}>┋</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableOfDashboard;
