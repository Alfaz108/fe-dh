import React, { useEffect, useMemo, useState } from "react";
import InvoiceCreateUpdate from "./InvoiceCreateUpdate";
import CustomTable from "../../../components/app/table";
import { useInvoiceListQuery } from "../../../redux/service/invoice/invoiceService";
import { getURL } from "../../../helpers/qs";
import { useDispatch, useSelector } from "react-redux";
import LoadingData from "../../../components/common/loadingData";
import { Card } from "react-bootstrap";

export const DEFAULT_INVOICE_VALUES = {
  categoryId: "",
  invoiceNumber: "",
  price: "",
  grandTotal: "",
  amountDue: "",
  discount: "",
  dateOfCreation: "",
  dateSent: "",
  Status: "",
  number: "",
  brief: "",
};

const Invoice = () => {
  const [modal, setModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(DEFAULT_INVOICE_VALUES);
  const [editData, setEditData] = useState(false);

  const dispatch = useDispatch();

  const { totalPage, page, limit, totalItems } = useSelector(
    (state) => state.pagination
  );

  // get url from redux ===========

  const { invoiceList, pagination, isLoading, isError } = useInvoiceListQuery(
    getURL(``),
    {
      selectFromResult: (data) => {
        console.log(data);
        return {
          pagination: data?.pagination,
          userList: data,
          isLoading: data?.isLoading,
          isError: data?.isError,
        };
      },
    }
  );

  useEffect(() => {
    if (pagination && Object.keys(pagination).length > 0) {
      dispatch(handlePagination(pagination));
    }
  }, [pagination]);

  // show modal when button will click ======
  const addShowModal = () => {
    setDefaultValues(DEFAULT_INVOICE_VALUES);
    setModal(true);
  };

  // modal toggle when click button =======
  const toggle = () => {
    setModal(!modal);
  };

  // dynamic add modal button from custom column ==
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

  const sizePerPageList = [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "50",
      value: 50,
    },
  ];
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
      <div className="card p-2">
        <div>
          <CustomTable
            columns={columns}
            data={invoiceList}
            addShowModal={addShowModal}
            pagination={pagination}
            pageSize={5}
            sizePerPageList={sizePerPageList}
            tableInfo={{
              addTitle: "Invoice",
            }}
          />
          <InvoiceCreateUpdate
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    );
  }
};

export default Invoice;
