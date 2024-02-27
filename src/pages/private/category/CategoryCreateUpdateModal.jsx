import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  useCategoryCreateMutation,
  useCategoryUpdateMutation,
} from "../../../redux/service/category/categoryService";

const CategoryCreateUpdateModal = ({
  modal,
  setModal,
  editData,
  toggle,
  defaultValues,
}) => {
  const [categoryCreate, { isLoading, isSuccess }] =
    useCategoryCreateMutation();

  const [categoryUpdate, { isLoading: updateLoad, isSuccess: updateSuccess }] =
    useCategoryUpdateMutation();
  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      active: yup.boolean().required("Active is required"),
      type: yup.string().required("Type is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const postBody = data;
    if (!editData) {
      categoryCreate(postBody);
    }
    // console.log(data);
    const transferData = {
      // address: postBody?.address,
      // city: postBody?.city,
      // dateOfBirth: postBody?.dateOfBirth,
      // email: postBody?.email,
      // fax: postBody?.fax,
      // gender: postBody?.gender,
      // name: postBody?.name,
      // password: postBody?.password,
      // phoneNumber: postBody?.phoneNumber,
      // role: postBody?.role,
      // state: postBody?.state,
      // status: postBody?.status,
      // zip: postBody?.zip,
      name: postBody?.name,
      active: postBody?.active,
      type: postBody?.type,
    };
    categoryUpdate({ postBody: transferData, id: postBody?._id });
  };

  useEffect(() => {
    if (isSuccess || updateSuccess) {
      setModal(false);
    }
  }, [isSuccess || updateSuccess]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [JSON.stringify(defaultValues)]);

  return (
    <>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="my-2">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control {...register("name")} />
                  <Form.Control.Feedback>
                    {" "}
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="my-2">
                <Form.Label>Type</Form.Label>
                <Form.Select {...register("action")} aria-label="Action">
                  {/* <option>Type</option> */}
                  <option value="true">True</option>
                  <option value="false">False</option>
                </Form.Select>
              </div>
              <div className="my-2">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  {...register("type")}
                  aria-label="Default select example">
                  {/* <option>Type</option> */}
                  <option value="TICKET">TICKET</option>
                  <option value="BID">BID</option>
                  <option value="INVOICE">INVOICE</option>
                </Form.Select>
              </div>
            </div>
            <div className="text-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryCreateUpdateModal;
