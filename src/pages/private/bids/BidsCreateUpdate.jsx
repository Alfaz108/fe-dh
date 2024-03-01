import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const BidsCreateUpdate = ({ modal, setModal, toggle }) => {
  const schemaResolver = yup.object().shape({
    name: yup.string().required("Name is required"),
  });

  const methods = useForm({
    mode: "all",

    // defaultValues,
    resolver: yupResolver(schemaResolver),
  });
  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            </div>
            <Button type="submit">Submit </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BidsCreateUpdate;
