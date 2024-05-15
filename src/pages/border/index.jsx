import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import CustomTable from "../../components/app/table";
import BorderCreateUpdateModal from "./BorderCreateUpdateModal";
import {
  useDeleteBorderMutation,
  useGetBorderQuery,
} from "../../redux/service/auth/borderService";
import LoadingData from "../../components/common/LoadingData";
import ErrorPage from "../../components/common/ErrorPage";
import Swal from "sweetalert2";

export const DEFAULT_BORDER_VALUE = {
  name: "",
  mobile: "",
  email: "",
  roomNumber: "",
  initialDepositAmount: "",
  depositAmount: "",
  mealQuantity: "",
};

const Border = () => {
  const [modal, setModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(DEFAULT_BORDER_VALUE);
  const [editData, setEditData] = useState(false);
  // console.log(defaultValues);

  // GET DATA ===================
  const { data, isLoading, isError, isSuccess } = useGetBorderQuery();
  // DELTE DATA ==================
  const [deleteBorder] = useDeleteBorderMutation();

  const deletHandler = ({ row }) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",s
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        deleteBorder({ id: row?.original._id });
      }
    });

    console.log({ id: row?.original._id });
  };
  // console.log(data);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  // let header = editData ? "Update Border" : "Add Border";

  const ActionColumn = ({ row }) => {
    const edit = () => {
      setDefaultValues(row?.original);
      setEditData(row?.original);
      toggle();
    };
    return (
      <>
        <span role="button" className="action-icon text-primary">
          <i className="mdi mdi-square-edit-outline" onClick={edit}></i>
        </span>

        <span role="button" className="action-icon text-dark">
          <i
            className="mdi mdi-delete"
            // onClick={() => deleteBorder({ id: row?.original._id })}
            onClick={() => deletHandler({ row })}
          ></i>
        </span>
      </>
    );
  };

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
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Room Number",
        accessor: "roomNumber",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Meal",
        accessor: "mealQuantity",
        Cell: ({ value }) => value || "n/a",
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
      <div className="mx-2 border-none">
        <Card.Body>
          <CustomTable
            columns={columns}
            addShowModal={addShowModal}
            data={data}
            tableInfo={{
              addTitle: "Border",
            }}
          />

          <BorderCreateUpdateModal
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            defaultValues={defaultValues}
            editData={editData}
            // header={header}
            //  addShowModal={addShowModal}
          />
        </Card.Body>
      </div>
    );
  }
};

export default Border;
