import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useUserDropdownQuery } from "../../../redux/service/user/userService";
import { useCategoryDropdownQuery } from "../../../redux/service/category/categoryService";
import bidStatusOfBid from "../../../constants/static/bidStatusOfBid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BidsCreateUpdate = ({ modal, setModal, toggle }) => {
  const schemaResolver = yup.object().shape({
    bidNumber: yup.number().required("Bid Number is required"),
    categoryId: yup.string().required("Category Id is required"),
    bidStatus: yup.string().required("Bid Status is required"),
    paymentType: yup.string().required("Payment Type is required"),
    price: yup.number().required("Price is required"),
    tax: yup.number().required("Tax is required"),
    amountDue: yup.number().required("Amount Due is required"),
  });

  const { data: userOptionList } = useUserDropdownQuery();
  const { data: categoryOptionList } = useCategoryDropdownQuery();

  const methods = useForm({
    mode: "all",

    // defaultValues,
    resolver: yupResolver(schemaResolver),
  });
  const { handleSubmit, control, reset, setValue } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal size="lg" show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div class="row  g-2">
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="bidNumber">Bid Number</Form.Label>
                    <Controller
                      name="bidNumber"
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="bidStatus">Status</Form.Label>
                    <Controller
                      name="bidStatus"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select category</option>
                            {bidStatusOfBid?.map((type) => (
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="paymentType">Payment Type</Form.Label>
                    <Controller
                      name="paymentType"
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
              <div class="row  g-2">
                <div class="col">
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="buyerId">buyer id</Form.Label>
                    <Controller
                      name="buyerId"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select buyer</option>
                            {userOptionList?.map((type) => (
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
                <div class="col">
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="sellerId">seller id</Form.Label>
                    <Controller
                      name="sellerId"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select seller</option>
                            {userOptionList?.map((type) => (
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

                <div class="col">
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="categoryId">Category Id</Form.Label>
                    <Controller
                      name="categoryId"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select seller</option>
                            {categoryOptionList?.map((type) => (
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
              <div class="row  g-2">
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="price">price</Form.Label>
                    <Controller
                      name="price"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="number"
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="discount">discount</Form.Label>
                    <Controller
                      name="discount"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="number"
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="tax">tax</Form.Label>
                    <Controller
                      name="tax"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="number"
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
              <div class="row  g-2">
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="amountDue">Amount Due</Form.Label>
                    <Controller
                      name="amountDue"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="number"
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="brief">brief</Form.Label>
                    <Controller
                      name="brief"
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="dateOfBid">Date Sent</Form.Label>
                    <Controller
                      name="dateOfBid"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <div>
                          <DatePicker
                            className="form-control"
                            selected={field.value}
                            onChange={(date) => setValue("dateOfBid", date)}
                            timeInputLabel="Time:"
                            dateFormat="yyyy-MM-dd HH:mm:ss"
                            showTimeInput
                            placeholderText="Enter your Date and Time"
                            isInvalid={!!error}
                          />

                          {error && (
                            <Form.Control.Feedback type="invalid">
                              {error.message}
                            </Form.Control.Feedback>
                          )}
                        </div>
                      )}
                    />
                  </Form.Group>
                </div>
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
