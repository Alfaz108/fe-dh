import React, { useMemo, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomTable from "../../../components/app/table/index";
import UserCreateUpdate from "./UserCreateUpdateModal";

const User = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      ab: {
        age: "25",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      ab: {
        age: "20",
      },
    },
  ];

  const [modal, setModal] = useState(false);

  const addShowModal = () => {
    setModal(!modal);
  };

  const toggle = () => {
    setModal(!modal);
  };
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Age",
        accessor: "ab.age",
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
                data={data}
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
