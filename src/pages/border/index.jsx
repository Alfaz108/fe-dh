import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import CustomTable from "../../components/app/table";
import BorderCreateUpdateModal from "./BorderCreateUpdateModal";
import { useGetBorderQuery } from "../../redux/service/auth/borderService";
import LoadingData from "../../components/common/loadingData";

export const DEFAULT_BORDER_VALUE = {
  name: "",
  mobile: "",
  email: "",
  roomNumber: "",
  initialDepositAmount: "",
  depositAmount: "",
  mealQuantity: "",
};

const Border = () => {
  const [modal, setModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(DEFAULT_BORDER_VALUE);
  const [editData, setEditData] = useState(false);
  // console.log(defaultValues);

  const { data, isLoading, isError, isSuccess } = useGetBorderQuery();
  // console.log(data);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const ActionColumn = ({ row }) => {
    const edit = () => {
      setDefaultValues(row?.original);
      setEditData(row?.original);
      toggle();
    };
    return (
      <>
        <span role="button" className="action-icon text-primary">
          <i className="mdi mdi-square-edit-outline" onClick={edit}></i>
        </span>

        <span role="button" className="action-icon text-warning">
          <i className="mdi mdi-delete"></i>
        </span>
      </>
    );
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
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Room Number",
        accessor: "roomNumber",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
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
        Header: "Meal",
        accessor: "mealQuantity",
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
        <h2>There is no data</h2>
      </div>
    );
  } else {
    return (
      <div className="mx-2 border-none">
        <Card.Body>
          <CustomTable
            columns={columns}
            addShowModal={addShowModal}
            data={data}
            tableInfo={{
              addTitle: "Border",
            }}
          />

          <BorderCreateUpdateModal
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            defaultValues={defaultValues}
            editData={editData}
            //  addShowModal={addShowModal}
          />
        </Card.Body>
      </div>
    );
  }
};

export default Border;
