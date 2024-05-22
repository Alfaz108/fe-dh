import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, Stack } from "rsuite";
import * as yup from "yup";
import { useGetBorderQuery } from "../../redux/service/auth/borderService";
import { useCreateDepositMutation } from "../../redux/service/auth/depositService";

const depositForm = [
  {
    name: "dipositDate",
    label: "Diposit Date",
    type: "date",
    placeholder: "Enter your Diposit Date",
    defaultValue: "value",
  },
  {
    name: "depositAmount",
    label: "Deposit Amount",
    type: "number",
    placeholder: "Enter your Deposit Amount",
    defaultValue: "value",
  },
];

const DepositCreateUpdateModal = ({ toggle, modal, setModal }) => {
  const schemaResolver = yup.object().shape({
    dipositDate: yup.string().required("Diposit Date is required"),
    depositAmount: yup
      .number()
      .required("Deposite Amount is required")
      .typeError("Must be greter then 0"),
    border: yup.string().required("Border is required"),
  });

  const { data: border } = useGetBorderQuery();

  const [createDeposit, { isLoading, isError, isSuccess }] =
    useCreateDepositMutation();

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schemaResolver),
  });

  const onSubmit = (data) => {
    const createData = data;
    createDeposit(createData);
    // console.log(data);
  };
  const { handleSubmit, control, reset } = methods;

  useEffect(() => {
    if (isSuccess) {
      setModal(false);
      // reset(defaultValues);
    }
  }, [isSuccess]);

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
          <h4>{createDeposit ? "Create Deposit" : "Add Deposit"}</h4>
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

              {/* <div className="w-50">
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
              </div> */}
              <div className="mt-3 text-end">
                <Button
                  type="submit"
                  // disabled={isLoading || updateLoad}
                >
                  Submit {isLoading && <Spinner animation="border" size="sm" />}
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
