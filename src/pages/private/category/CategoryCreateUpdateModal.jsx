import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import typeOption from "../../../constants/static/typeOption";

import * as yup from "yup";

import {
  useCategoryCreateMutation,
  useCategoryUpdateMutation,
} from "../../../redux/service/category/categoryService";
import { InputGroup, Spinner } from "react-bootstrap";

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

  const schemaResolver = yup.object().shape({
    name: yup.string().required("Name is required"),
    type: yup.string().required("Type is required"),
    active: yup.boolean().required("Action is required"),
  });

  const methods = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schemaResolver),
  });
  const { handleSubmit, control, reset } = methods;
  const onSubmit = (data) => {
    const postBody = data;
    // categoryCreate(postBody);
    if (!editData) {
      categoryCreate(postBody);
    } else {
      const transferData = {
        name: postBody?.name,
        type: postBody?.type,
        active: postBody?.active,
      };
      categoryUpdate({ postBody: transferData, id: postBody?._id });
    }
    console.log(data);
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
                <Form.Group>
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Enter your name"
                          isInvalid={!!error}
                          autoComplete="off"
                        />

                        {error && (
                          <Form.Control.Feedback type="invalid">
                            {error.message}
                          </Form.Control.Feedback>
                        )}
                      </>
                    )}
                  />
                </Form.Group>
              </div>
              <div className="my-2">
                <Form.Group>
                  <Form.Label htmlFor="role">Active</Form.Label>
                  <Controller
                    name="active"
                    control={control}
                    type="boolean"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <InputGroup.Checkbox
                          {...field}
                          aria-label="Checkbox for following text input"
                        />

                        {error && (
                          <Form.Control.Feedback type="invalid">
                            {error.message}
                          </Form.Control.Feedback>
                        )}
                      </>
                    )}
                  />
                </Form.Group>
              </div>
              <div className="my-2">
                <Form.Group>
                  <Form.Label htmlFor="role">Type</Form.Label>
                  <Controller
                    name="type"
                    type="text"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Form.Select {...field} isInvalid={!!error}>
                          <option value="">Select Type</option>
                          {typeOption.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </Form.Select>

                        {error && (
                          <Form.Control.Feedback type="invalid">
                            {error.message}
                          </Form.Control.Feedback>
                        )}
                      </>
                    )}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="mt-3 text-end">
              <Button type="submit" disabled={isLoading || updateLoad}>
                Submit{" "}
                {(isLoading || updateLoad) && (
                  <Spinner animation="border" size="sm" />
                )}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryCreateUpdateModal;
