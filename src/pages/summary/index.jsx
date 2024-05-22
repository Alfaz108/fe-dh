import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import CustomTable from "../../components/app/table";
import { useGetSummaryQuery } from "../../redux/service/auth/summaryService";
import LoadingData from "../../components/common/LoadingData";
import ErrorPage from "../../components/common/ErrorPage";
// import useGetSummaryQuery from "../../redux/service/auth/summaryService";

const Summary = () => {
  const [modal, setModal] = useState(false);

  const { data, isLoading, isError } = useGetSummaryQuery();
  console.log(data);

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
        Header: "Meal Quantity",
        accessor: "mealQuantity",
        Cell: ({ value }) => value ?? 0,
        classes: "table-user",
      },
      {
        Header: "Meal Rate",
        accessor: "mealRate",
        Cell: ({ value }) => value ?? 0,
        classes: "table-user",
      },
      {
        Header: "Summary Amount",
        accessor: "summaryAmount",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Total Cost",
        accessor: "totalCost",
        Cell: ({ value }) => value ?? 0,
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
            // addShowModal={addShowModal}
          />
        </Card.Body>
      </div>
    );
  }
};

export default Summary;
