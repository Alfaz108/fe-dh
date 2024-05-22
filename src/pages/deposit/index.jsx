import React, { useMemo, useState } from "react";
import CustomTable from "../../components/app/table";
import { Card } from "react-bootstrap";
import DepositCreateUpdateModal from "./DepositCreateUpdateModal";
import { useGetDepositQuery } from "../../redux/service/auth/depositService";
import LoadingData from "../../components/common/LoadingData";
import ErrorPage from "../../components/common/ErrorPage";

const Deposit = () => {
  const [modal, setModal] = useState(false);

  const { data, isLoading, isError } = useGetDepositQuery();
  console.log(data);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!toggle);
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "sl",
        Cell: ({ row }) => row.index + 1,
        classes: "table-user",
      },
      {
        Header: "Border Name",
        accessor: "name",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Deposit Amount",
        accessor: "depositAmount",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: ({ value }) => {
          if (!value) return "n/a";
          const date = new Date(value);
          return date.toDateString();
        },
        // value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Address",
        accessor: "address",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <div>
        <LoadingData />
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  } else {
    return (
      <div className="mx-2">
        <Card.Body>
          <CustomTable
            data={data}
            columns={columns}
            addShowModal={addShowModal}
            tableInfo={{ addTitle: "Deposit" }}
          />

          <DepositCreateUpdateModal
            toggle={toggle}
            modal={modal}
            setModal={setModal}
          />
        </Card.Body>
      </div>
    );
  }
};

export default Deposit;
