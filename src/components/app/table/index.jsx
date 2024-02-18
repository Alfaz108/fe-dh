// CustomTable.js
import React from "react";
import { Button, Table } from "react-bootstrap";

const CustomTable = (props) => {
  const data = props["data"] || [];
  const columns = props["columns"] || [];
  const hideBtn = props["hideBtn"];
  const addWithoutModal = props["addWithoutModal"];
  const addShowModal = props["addShowModal"];
  const tableInfo = props["tableInfo"] || {};

  const renderCellValue = (row, accessor) => {
    const accessors = accessor.split(".");
    let value = row;
    for (const acc of accessors) {
      value = value?.[acc];
      if (value === undefined) break;
    }
    return value;
  };

  return (
    <>
      {!addWithoutModal && !hideBtn && (
        <Button variant="primary" className="me-2" onClick={addShowModal}>
          <i className="mdi mdi-plus-circle me-2"></i>{" "}
          {`Add ${tableInfo?.addTitle}`}
        </Button>
      )}
      <Table striped bordered hover className=" mt-5">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{renderCellValue(row, column.accessor)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CustomTable;
