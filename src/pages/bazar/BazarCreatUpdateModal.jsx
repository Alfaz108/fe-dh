import React, { useEffect } from "react";
import { Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetBorderQuery } from "../../redux/service/auth/borderService";
import { useCreateBazarMutation } from "../../redux/service/auth/bazarService";

const bazarForm = [
  {
    id: 1,
    name: "bazarDate",
    label: "Bazar Date",
    type: "date",
    placeholder: "Enter your name",
    defaultValue: "value",
  },
  {
    id: 2,
    name: "totalPrice",
    label: "Total Price",
    type: "number",
    placeholder: "Enter your number",
    defaultValue: "value",
  },
];

const BazarCreatUpdateModal = ({
  modal,
  setModal,
  toggle,
  editBazar,
  defaultValues,
}) => {
  console.log(editBazar);
  const schemaResolver = yup.object().shape({
    bazarDate: yup.string().required("Date is required"),
    totalPrice: yup
      .number()
      .required("Total Price is required")
      .typeError("Total price must be number")
      .min(0, "Must be gretar then 0"),
    border: yup.string().required("Border is required"),
  });

  const methods = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schemaResolver),
  });

  const { data: border } = useGetBorderQuery();
  const { handleSubmit, control, reset } = methods;

  const [createBazar, { isLoading, isError, isSuccess }] =
    useCreateBazarMutation();

  const onSubmit = (data) => {
    const creatData = data;
    createBazar(creatData);
    console.log(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setModal(false);
      // reset(defaultValues);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [JSON.stringify(defaultValues)]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {bazarForm.map((item) => (
                <div key={item.id} className="col-md-6">
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
                            autoComplete="off"
                            className={
                              error ? "form-control is-invalid" : "form-control"
                            }
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

              <span className="w-50">
                <Form.Group>
                  <Form.Label htmlFor="border">Border</Form.Label>
                  <Controller
                    name="border"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Form.Select {...field} isInvalid={!!error}>
                          <option value="">Select Status</option>
                          {border.map((type) => (
                            <option key={type?._id} value={type?._id}>
                              {type?.name}
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
              </span>

              <div className="mt-3 text-end">
                <Button type="submit" disabled={isLoading}>
                  Submit
                  {isLoading && <Spinner animation="bazar" size="sm" />}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BazarCreatUpdateModal;
