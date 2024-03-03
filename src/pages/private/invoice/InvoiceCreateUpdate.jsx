import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Controller, useForm } from "react-hook-form";
import statusOfInvoice from "../../../constants/static/statusOfInvoice";
import * as yup from "yup";
import { useInvoiceCreateMutation } from "../../../redux/service/invoice/invoiceService";
import {
  useCategoryDropdownQuery,
  useCategoryLIstQuery,
} from "../../../redux/service/category/categoryService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InvoiceCreateUpdate = ({ modal, setModal, toggle }) => {
  const [invoiceCreate, { isLoading, isSuccess }] = useInvoiceCreateMutation();

  const schemaResolver = yup.object().shape({
    categoryId: yup.string().required("Category Id is required"),
    invoiceNumber: yup.string().required("Invoice Number is required"),
    price: yup.number().required("Price is required"),
    grandTotal: yup.number().required("Grand Total applied is required"),
    amountDue: yup.number().required("Amount Due is required"),
    discount: yup.number().required("Number is required"),
    dateOfCreation: yup.date().required("Date Of Creation is required"),
    dateSent: yup.date().required("Date Sent is required"),
    Status: yup.string().required("Status is required"),
    number: yup.number().required("Tax is required"),
    brief: yup.string().required("Brief is required"),
  });

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schemaResolver),
  });

  const { handleSubmit, control, reset, setValue } = methods;
  const { data: categoryOptionList } = useCategoryDropdownQuery();

  const onSubmit = (data) => {
    const postBody = {
      categoryId: data.dateDue.categoryId,
      invoiceNumber: data.invoiceNumber,
      price: data.price,
      grandTotal: data.grandTotal,
      amountDue: data.amountDue,
      discount: data.discount,
      dateOfCreation: data.dateOfCreation,
      dateSent: data.dateSent,
      Status: data.Status,
      number: data.number,
      brief: data.brief,
    };

    invoiceCreate(postBody);

    console.log(postBody);
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
              <div class="row g-2">
                <div class="col">
                  <Form.Group>
                    <Form.Label htmlFor="invoiceNumber">
                      Invoice Number
                    </Form.Label>
                    <Controller
                      name="invoiceNumber"
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

                <div class="col">
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="categoryId">Category</Form.Label>
                    <Controller
                      name="categoryId"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select category</option>
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

              <div className="row g-2">
                <div className="col">
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="price">Price</Form.Label>
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
                  {" "}
                  <Form.Group>
                    <Form.Label htmlFor="grandTotal">Grand Total</Form.Label>
                    <Controller
                      name="grandTotal"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="number"
                            placeholder="Enter the price"
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

              <div className="row g-2">
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
                {/* <div className="col-">
                  <Form.Group>
                    <Form.Label htmlFor="dateOfCreation">
                      Date Of Creation
                    </Form.Label>
                    <Controller
                      name="dateOfCreation"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="date"
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
                </div> */}
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="dateOfCreation">
                      Date Of Birth
                    </Form.Label>
                    <Controller
                      name="dateOfCreation"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <div>
                          <DatePicker
                            className="form-control w-100"
                            selected={field.value}
                            onChange={(date) =>
                              setValue("dateOfCreation", date)
                            }
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="dateSent">Date Sent</Form.Label>
                    <Controller
                      name="dateSent"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <div>
                          <DatePicker
                            className="form-control"
                            selected={field.value}
                            onChange={(date) => setValue("dateSent", date)}
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

              <div className="row g-2">
                {/* <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="dateSent">Date Sent</Form.Label>
                    <Controller
                      name="dateSent"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="date"
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
                </div> */}
                <div className="col-6">
                  <Form.Group>
                    <Form.Label htmlFor="Status">Status</Form.Label>
                    <Controller
                      name="Status"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select category</option>
                            {statusOfInvoice?.map((type) => (
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
                    <Form.Label htmlFor="number">Tax</Form.Label>
                    <Controller
                      name="number"
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
              <div className="row g-2">
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="discount">Discount</Form.Label>
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
                    <Form.Label htmlFor="brief">Brief</Form.Label>
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
              </div>
            </div>
            <div className="text-end">
              <Button className="mt-2 text-end" type="submit">
                Submit
                {/* {isLoading && <Spinner animation="border" size="sm" />} */}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InvoiceCreateUpdate;
