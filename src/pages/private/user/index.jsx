import React, { useMemo, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomTable from "../../../components/app/table/index";
import UserCreateUpdate from "./UserCreateUpdateModal";
import {
  useUserDeleteMutation,
  useUserListQuery,
} from "../../../redux/service/user/userService";

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

  console.log(defaultValues);

  const ActionColumn = ({ row }) => {
    const edit = () => {
      toggle();
      setDefaultValues(row?.original);
      setEditData(row?.original);
    };
    return (
      <>
        <span role="button" className="action-icon text-warning">
          <i className="mdi mdi-square-edit-outline" onClick={edit}>
            {" "}
            edit
          </i>
        </span>

        <span role="button" className="action-icon text-danger ms-2">
          <i
            className="mdi mdi-delete"
            onClick={() => userDelete({ id: row?.original?._id })}
          >
            delete
          </i>
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
  return (
    <>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <CustomTable
                columns={columns}
                data={user}
                addShowModal={addShowModal}
                tableInfo={{
                  addTitle: "User",
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <UserCreateUpdate
        {...{
          modal,
          setModal,
          toggle,
          defaultValues,
          editData,
        }}
      />
    </>
  );
};

export default User;
