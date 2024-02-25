import React from "react";
import { useUserListQuery } from "../../redux/service/user/userService";
import Table from "./";

import { Card, Col, Row } from "react-bootstrap";
import CustomTable from "./";

const Component = () => {
  const { data, isLoading, isError } = useUserListQuery();

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "sl",
        sort: true,
        Cell: ({ row }) => row.index + 1,
        classes: "table-user",
        width: 10,
      },
      {
        Header: "name",
        accessor: "name",
        sort: true,
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
        minWidth: "10rem",
      },
    ],
    []
  );

  // Check if data is undefined or null
  if (isLoading || isError || !data) {
    return <div>Loading...</div>;
  }
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <CustomTable columns={columns} data={data} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
