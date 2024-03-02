import React, { useMemo, useState } from "react";
import InvoiceCreateUpdate from "./InvoiceCreateUpdate";
import CustomTable from "../../../components/app/table";
import { useInvoiceListQuery } from "../../../redux/service/invoice/invoiceService";
import { getURL } from "../../../helpers/qs";

export const DEFAULT_CATEGORY_VALUES = {
  categoryId: Math.floor(Math.random() * new Date().getTime() * 10),
  invoiceNumber: "INV-2023-001",
  price: "",
  grandTotal: "",
  amountDue: "",
  status: "",
};

const Invoice = () => {
  const [modal, setModal] = useState(false);

  // get url from redux ===========
  const { invoiceList, isLoading, isError } = useInvoiceListQuery(getURL(``), {
    selectFromResult: (data) => {
      return {
        invoiceList: data?.data?.data,
        isLoading: data?.isLoading,
        isError: data?.isError,
      };
    },
  });

  // show modal when button will click ======
  const addShowModal = () => {
    setModal(true);
  };

  // modal toggle when click button =======
  const toggle = () => {
    setModal(!modal);
  };

  // dynamic add modal button from custom column ==
  const ActionColumn = ({ row }) => {
    console.log(row);
    toggle();
  };

  // column show on display ====
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
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Time",
        accessor: "createdAt",
        Cell: ({ value }) => {
          const date = value ? new Date(value) : null;
          return date ? date.toLocaleString() : "n/a";
        },
        classes: "table-user",
      },
    ],
    []
  );

  return (
    <div className="card p-2">
      <div>
        <CustomTable
          columns={columns}
          data={invoiceList}
          addShowModal={addShowModal}
          tableInfo={{
            addTitle: "Invoice",
          }}
        />
        <InvoiceCreateUpdate
          modal={modal}
          setModal={setModal}
          toggle={toggle}
        />
      </div>
    </div>
  );
};

export default Invoice;
