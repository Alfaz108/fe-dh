import React, { useEffect } from "react";
import { Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import classNames from "classnames";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import statusOption from "../../constants/static/statusOption";

import * as yup from "yup";
import {
  useCreateBorderMutation,
  useUpdateBorderMutation,
} from "../../redux/service/auth/borderService";
import CustomInputFIelds from "../../components/common/CustomInputFIelds";

const borderForm = [
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
  {
    name: "roomNumber",
    label: "Room Number",
    type: "number",
    placeholder: "Enter your room number",
    defaultValue: "value",
  },
  {
    name: "initialDepositAmount",
    label: "Initial Deposit Amount",
    type: "number",
    placeholder: "Initial Deposit",
    defaultValue: "value",
  },
];

const schemaResolver = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .min(11, "Mobile number must be at least 11 characters")
    .max(11, "Mobile number must be at least 11 characters")
    .matches(
      /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
      "Mobile number is not valid"
    ),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid e-mail"),
  roomNumber: yup
    .number()
    .typeError("Room number must be a number")
    .required("Room number is required")
    .min(0, "Too little"),
  initialDepositAmount: yup
    .number()
    .typeError("Initial Deposit Amount must be a number")
    .required("Initial Deposit Amount is required")
    .min(0, "Initial Deposit Amount must be greater than zero"),

  status: yup.string().required("Status is required"),
});

const BorderCreateUpdateModal = ({
  modal,
  setModal,
  toggle,
  defaultValues,
  editData,
  // header,
}) => {
  const [createBorder, { isLoading, isSuccess }] = useCreateBorderMutation();
  const [updateBorder, { isLoading: updateLoad, isSuccess: updateSuccess }] =
    useUpdateBorderMutation();

  console.log(editData);

  const methods = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schemaResolver),
  });

  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    const createData = data;

    if (!editData) {
      createData.depositAmount = createData?.initialDepositAmount;
      createData.mealQuantity = 0;
      createBorder(createData);
    } else {
      const updateData = {
        name: createData?.name,
        mobile: createData?.mobile,
        email: createData?.email,
        roomNumber: createData?.roomNumber,
        initialDepositAmount: editData?.initialDepositAmount,
        depositAmount: editData?.depositAmount,
        mealQuantity: editData?.mealQuantity,
      };

      updateBorder({ postBody: updateData, id: createData?._id });
    }
  };

  useEffect(() => {
    if (isSuccess || updateSuccess) {
      setModal(false);
      reset(defaultValues);
    }
  }, [isSuccess, updateSuccess]);

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
          <h4>{editData ? "Upadate Border" : "Add Border"}</h4>
        </Modal.Header>
        <Modal.Body>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="row">
                  <CustomInputFIelds
                    control={control}
                    borderForm={borderForm}
                  />
                  <span className="w-50">
                    <Form.Group>
                      <Form.Label htmlFor="status">Status</Form.Label>
                      <Controller
                        name="status"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Select {...field} isInvalid={!!error}>
                              <option value="">Select Status</option>
                              {statusOption.map((type) => (
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
                  </span>
                </div>
              </div>
              <div className="mt-3 text-end">
                <Button type="submit" disabled={isLoading || updateLoad}>
                  Submit{" "}
                  {isLoading ||
                    (updateLoad && <Spinner animation="border" size="sm" />)}
                </Button>
              </div>
            </form>
          </FormProvider>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BorderCreateUpdateModal;
