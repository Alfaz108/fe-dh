import React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const key = "Composed Table";

const CustomTable = ({ columns, data }) => {
  const theme = useTheme(getTheme());

  return (
    <Table data={data} theme={theme}>
      {(tableList) => console.log(tableList)}
    </Table>
  );
};

export default CustomTable;
