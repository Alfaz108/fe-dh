import React, { useEffect, useMemo, useState } from "react";
import CategoryCreateUpdateModal from "./CategoryCreateUpdateModal";
import CustomTable from "../../../components/app/table";
import {
  useCategoryDeleteMutation,
  useCategoryLIstQuery,
} from "../../../redux/service/category/categoryService";
import { getURL } from "../../../helpers/qs";
import { useDispatch, useSelector } from "react-redux";
import { handlePagination } from "../../../redux/features/paginationReducer";
import LoadingData from "../../../components/common/loadingData";
import { Card } from "react-bootstrap";

export const DEFAULT_CATEGORY_VALUES = {
  name: "",
  active: "true",
  type: "",
};

const Category = () => {
  const [modal, setModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(DEFAULT_CATEGORY_VALUES);
  const [editData, setEditData] = useState(false);

  const { totalPage, page, limit, totalItems } = useSelector(
    (state) => state.pagination
  );

  const dispatch = useDispatch();
  const { categoryList, pagination, isLoading, isError } = useCategoryLIstQuery(
    getURL(``),
    {
      selectFromResult: (data) => {
        // console.log(data);
        return {
          pagination: data?.data?.pagination,
          categoryList: data?.data?.data,
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

  const [categoryDelete] = useCategoryDeleteMutation();

  const addShowModal = () => {
    setDefaultValues(DEFAULT_CATEGORY_VALUES);
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const ActionColumn = ({ row }) => {
    console.log(row);
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
            onClick={() => categoryDelete({ id: row?.original?._id })}></i>
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
      <div className="card">
        <div className="p-3">
          <CustomTable
            columns={columns}
            data={categoryList}
            addShowModal={addShowModal}
            pagination={pagination}
            pageSize={5}
            sizePerPageList={sizePerPageList}
            tableInfo={{
              addTitle: "Category",
            }}
          />
          <CategoryCreateUpdateModal
            modal={modal}
            setModal={setModal}
            toggle={toggle}
            defaultValues={defaultValues}
            editData={editData}
          />
        </div>
      </div>
    );
  }
};

export default Category;
