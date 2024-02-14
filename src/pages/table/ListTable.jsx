import { Table, Pagination } from "rsuite";
import React, { useEffect, useState } from "react";
import "../../App.css";
// import { mockUsers } from "./mock";

// const data1 = mockUsers(100);

const ListTable = () => {
  const [data1, setData1] = useState(null);
  const { Column, HeaderCell, Cell } = Table;
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  console.log(data1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData1(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data1]);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = data1.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Table height={420} data={data}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100}>
          <HeaderCell>User Name</HeaderCell>
          <Cell dataKey="username" />
        </Column>

        <Column width={200}>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="phone" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Website</HeaderCell>
          <Cell dataKey="website" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Zip Code</HeaderCell>
          <Cell dataKey="address.zipcode" />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={data1.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ListTable;
