import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import CustomTable from "../../../components/app/table/index";
import UserCreateUpdate from "./UserCreateUpdateModal";

import {
  useUserDeleteMutation,
  useUserListQuery,
} from "../../../redux/service/user/userService";
import LoadingData from "../../../components/common/loadingData";

export const DEFAULT_USER_VALUES = {
  name: "",
  email: "",
  password: "",
  role: "FREELANCER",
  status: "PENDING",
  address: "",
  city: "",
  dateOfBirth: "",
  fax: "",
  gender: "",
  phoneNumber: "",
  state: "",
  zip: "",
};

const User = () => {
  const [modal, setModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(DEFAULT_USER_VALUES);
  const [editData, setEditData] = useState(false);

  const { data: user, isLoading, isError } = useUserListQuery();
  const [userDelete] = useUserDeleteMutation();

  const addShowModal = () => {
    setDefaultValues(DEFAULT_USER_VALUES);
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const ActionColumn = ({ row }) => {
    const edit = () => {
      toggle();
      setDefaultValues(row?.original);
      setEditData(row?.original);
    };

    return (
      <>
        <span role="button" className="action-icon text-warning">
          <i className="mdi mdi-square-edit-outline" onClick={edit}></i>
        </span>

        <span role="button" className="action-icon text-danger ms-2">
          <i
            className="mdi mdi-delete"
            onClick={() => userDelete({ id: row?.original?._id })}></i>
        </span>
      </>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "action",
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
        Header: "name",
        accessor: "name",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "email",
        accessor: "email",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "role",
        accessor: "role",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "gender",
        accessor: "gender",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "address",
        accessor: "address",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <Card>
        <Card.Body>
          <LoadingData />
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card className="h-100">
        <Card.Body>
          <CustomTable
            columns={columns}
            data={user}
            addShowModal={addShowModal}
            tableInfo={{
              addTitle: "User",
            }}
          />

          <UserCreateUpdate
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            defaultValues={defaultValues}
            editData={editData}
          />
        </Card.Body>
      </Card>
    );
  }
};

export default User;
