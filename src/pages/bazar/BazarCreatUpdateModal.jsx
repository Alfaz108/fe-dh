import React, { useEffect } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import classNames from "classnames";
import { Controller, FormProvider, useForm } from "react-hook-form";

const bazarForm = [
  {
    name: "bazarDate",
    label: "Bazar Date",
    type: "date",
    placeholder: "Enter your name",
    defaultValue: "value",
  },
  {
    name: "totalPrice",
    label: "Total Price",
    type: "number",
    placeholder: "Enter your number",
    defaultValue: "value",
  },
  {
    name: "border",
    label: "Border",
    type: "text",
    placeholder: "Enter your number",
    defaultValue: "value",
  },
];

const BazarCreatUpdateModal = ({ modal, setModal, toggle }) => {
  const methods = useForm({});

  const { control } = methods;

  useEffect(() => {
    // setModal(true)
  });
  return (
    <div className={classNames("", { "d-none": !modal })}>
      <Modal
        show={modal}
        onHide={toggle}
        backdrop="static"
        keyboard={false}
        setModal
        size="lg"
      >
        <Modal.Header onHide={toggle} closeButton>
          <h4>Modal Bazar</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {bazarForm.map((item) => (
              <div className="col-md-6">
                <FormProvider {...methods}>
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
                </FormProvider>
              </div>
            ))}

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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BazarCreatUpdateModal;
