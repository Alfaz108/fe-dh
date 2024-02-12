import React from "react";
import "./CardTable.css";

const CardTable = () => {
  return (
    <div className="">
      <div className="table-wrap">
        <table className="table text-center">
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
              <th scope="row" className="scope">
                .com
              </th>
              <td>1 Year</td>
              <td>$70.00</td>
              <td>$5.00</td>
              <td>$5.00</td>
              <td>
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                .net
              </th>
              <td>1 Year</td>
              <td>$75.00</td>
              <td>$5.00</td>
              <td>$5.00</td>
              <td>
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                .org
              </th>
              <td>1 Year</td>
              <td>$65.00</td>
              <td>$5.00</td>
              <td>$5.00</td>
              <td>
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                .biz
              </th>
              <td>1 Year</td>
              <td>$60.00</td>
              <td>$5.00</td>
              <td>$5.00</td>
              <td>
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="scope">
                .info
              </th>
              <td>1 Year</td>
              <td>$50.00</td>
              <td>$5.00</td>
              <td>$5.00</td>
              <td>
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="scope border-bottom-0">
                .me
              </th>
              <td className="border-bottom-0">1 Year</td>
              <td className="border-bottom-0">$45.00</td>
              <td className="border-bottom-0">$5.00</td>
              <td className="border-bottom-0">$5.00</td>
              <td className="border-bottom-0">
                <a href="#" className="btn btn-primary">
                  Sign Up
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;
