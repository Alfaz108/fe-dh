import React from "react";
import { Button } from "react-bootstrap";
import { useTable } from "react-table";

const CustomTable = (props) => {
  const data = props["data"] || [];
  const columns = props["columns"] || [];
  const hideBtn = props["hideBtn"];
  const addWithoutModal = props["addWithoutModal"];
  const addShowModal = props["addShowModal"];
  const tableInfo = props["tableInfo"] || {};
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {!addWithoutModal && !hideBtn && (
        <Button variant="primary" className="me-2" onClick={addShowModal}>
          <i className="mdi mdi-plus-circle me-2"></i>{" "}
          {`Add ${tableInfo?.addTitle}`}
        </Button>
      )}
      <table {...getTableProps()} className="table mt-5">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={column.classes}
                  style={{ minWidth: column.minWidth, width: column.width }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
