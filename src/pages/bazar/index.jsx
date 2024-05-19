import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import CustomTable from "../../components/app/table";
import BazarCreatUpdateModal from "./BazarCreatUpdateModal";
import {
  useDeleteBazarMutation,
  useGetBazarQuery,
} from "../../redux/service/auth/bazarService";
import LoadingData from "../../components/common/LoadingData";
import ErrorPage from "../../components/common/ErrorPage";
import Swal from "sweetalert2";

export const DEFAULT_BAZAR_VALUE = {
  bazarDate: "",
  totalPrice: "",
  border: "",
};

const Bazar = () => {
  const [modal, setModal] = useState(false);
  const [defaultValue, setDefaultValues] = useState(DEFAULT_BAZAR_VALUE);
  const [editBazar, setEditBazar] = useState(false);

  const { data, isLoading, isError } = useGetBazarQuery();

  const [deleteBazar] = useDeleteBazarMutation();

  // console.log(data);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

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
        deleteBazar({ id: row?.original._id });
      }
    });

    console.log({ id: row?.original._id });
  };
  const ActionColumn = ({ row }) => {
    const edit = () => {
      setDefaultValues(row?.original);
      setEditBazar(row?.original);
      toggle();
    };
    return (
      <>
        <span role="button" className="action-icon text-primary">
          <i className="mdi mdi-square-edit-outline" onClick={edit}></i>
        </span>

        <span role="button" className="action-icon text-danger">
          <i
            className="mdi mdi-delete"
            // onClick={() => deleteBorder({ id: row?.original._id })}
            onClick={() => deletHandler({ row })}
          ></i>
        </span>
      </>
    );
  };
  const columns = useMemo(() => [
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
      Header: "Bazar Date",
      accessor: "bazarDate",
      Cell: ({ value }) => {
        if (!value) return "n/a";
        const date = new Date(value);
        return date.toDateString(); // This will format the date and time
      },
      classes: "table-user",
    },
    {
      Header: "Total Price",
      accessor: "totalPrice",
      Cell: ({ value }) => value || "n/a",
      classes: "table-user",
    },
  ]);

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
            columns={columns}
            data={data}
            addShowModal={addShowModal}
            tableInfo={{ addTitle: "Bazar" }}
          />
          <BazarCreatUpdateModal
            modal={modal}
            toggle={toggle}
            setModal={setModal}
            defaultValue={defaultValue}
            editBazar={editBazar}
          />
        </Card.Body>
      </div>
    );
  }
};

export default Bazar;
