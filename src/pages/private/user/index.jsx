import React, { useMemo, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomTable from "../../../components/app/table/index";
import UserCreateUpdate from "./UserCreateUpdateModal";
import { useUserListQuery } from "../../../redux/service/user/userService";

const User = () => {
  const [modal, setModal] = useState(false);

  const { data: user, isLoading, isError } = useUserListQuery();

  const addShowModal = () => {
    setModal(!modal);
  };
  const toggle = () => {
    setModal(!modal);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Role",
        accessor: "role",
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
        }}
      />
    </>
  );
};

export default User;
