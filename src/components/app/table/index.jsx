import React from "react";
import { Button } from "react-bootstrap";
import { useTable } from "react-table";
import Pagination from "./Pagination";

const CustomTable = (props) => {
  const data = props["data"] || [];
  const columns = props["columns"] || [];
  const hideBtn = props["hideBtn"];
  const addWithoutModal = props["addWithoutModal"];
  const addShowModal = props["addShowModal"];
  const tableInfo = props["tableInfo"] || {};
  const pagination = props["pagination"] || false;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const backgroundColor = "#343a40";

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      {!addWithoutModal && !hideBtn && (
        <Button
          variant="primary"
          className="me-2 mb-3"
          onClick={addShowModal}
          style={{ backgroundColor }}
        >
          <i className="mdi mdi-plus-circle me-2"></i>
          {`Add ${tableInfo?.addTitle}`}
        </Button>
      )}
      <table
        {...getTableProps()}
        className="table table-striped table-bordered"
      >
        <thead className="thead-primary">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={column.classes}
                  style={{
                    minWidth: column.minWidth,
                    width: column.width,
                    backgroundColor,
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-light">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ textAlign: "center" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {pagination && (
        <Pagination
          sizePerPageList={props["sizePerPageList"]}
          paginationInfo={pagination}
        />
      )}
    </div>
  );
};

export default CustomTable;
