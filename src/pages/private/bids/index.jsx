import React, { useMemo, useState } from "react";
import CustomTable from "../../../components/app/table";
import BidsCreateUpdate from "./BidsCreateUpdate";

const Bids = () => {
  const [modal, setModal] = useState(false);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const ActionColumn = ({ row }) => {
    console.log(row);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
        classes: "table-action",
        Cell: ActionColumn,
      },
      {
        Header: "#",
        accessor: "sl",
        Cell: ({ row }) => row.index + 1,
        classes: "table-user",
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Time",
        accessor: "createdAt",
        Cell: ({ value }) => {
          const date = value ? new Date(value) : null;
          return date ? date.toLocaleString() : "n/a";
        },
        classes: "table-user",
      },
    ],
    []
  );
  return (
    <div className="card p-2">
      <div>
        <CustomTable
          columns={columns}
          addShowModal={addShowModal}
          tableInfo={{
            addTitle: "Bids",
          }}
        />
        <BidsCreateUpdate modal={modal} setModal={setModal} toggle={toggle} />
      </div>
    </div>
  );
};

export default Bids;
