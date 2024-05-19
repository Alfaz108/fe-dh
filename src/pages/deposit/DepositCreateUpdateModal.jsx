import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, Stack } from "rsuite";
import * as yup from "yup";

const depositForm = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    defaultValue: "value",
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "tel",
    placeholder: "Enter your number",
    defaultValue: "value",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    defaultValue: "value",
  },
];

const DepositCreateUpdateModal = ({ toggle, modal, setModal }) => {
  const schemaResolver = yup.object().shape({
    name: yup.string().required("hello"),
  });

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schemaResolver),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const { handleSubmit, control } = methods;
  return (
    <div className="z-1">
      <Modal
        show={modal}
        onHide={toggle}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header onHide={toggle} closeButton>
          <h4>Modal header</h4>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {depositForm.map((item) => (
                <div className="col-md-6">
                  <Form.Group className="pb-3">
                    <Form.Label htmlFor={item.name}>{item.label}</Form.Label>
                    <Controller
                      name={item.name}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type={item.type}
                            placeholder={item.placeholder}
                            //   isInvalid={!!error}
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
              ))}
              <div className="w-50">
                <label htmlFor="" className="py-1">
                  Date and Time
                </label>
                <div>
                  <DatePicker
                    className="w-100 "
                    format="yyyy-MM-dd HH:mm"
                    editable={false}
                  />
                </div>
              </div>
              <div className="mt-3 text-end">
                <Button
                  type="submit"
                  // disabled={isLoading || updateLoad}
                >
                  Submit{" "}
                  {/* {(isLoading || updateLoad) && (
                    <Spinner animation="border" size="sm" />
                  )} */}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DepositCreateUpdateModal;
