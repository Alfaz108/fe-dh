import React from "react";
import { useUserListQuery } from "../../redux/service/user/userService";
import CustomTable from "./index";

const MyComponent = () => {
  const { data, isLoading, isError } = useUserListQuery();

  console.log(data);

  const columns = [
    { label: "Name", accessor: "name" },
    {
      label: "Email",
      accessor: "email",
      renderCell: (item) => {
        console.log(item);
      },
    },
    { label: "Gender", accessor: "gender" },
  ];

  return <CustomTable columns={columns} data={data} />;
};

export default MyComponent;
