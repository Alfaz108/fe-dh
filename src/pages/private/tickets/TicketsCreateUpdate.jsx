import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useCategoryDropdownQuery } from "../../../redux/service/category/categoryService";
import typeTicket from "../../../constants/static/typeOfTicket";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTicketsCreateMutation } from "../../../redux/service/tickets/ticketsService";

const TicketsCreateUpdate = ({ modal, setModal, toggle }) => {
  const schemaResolver = yup.object().shape({
    categoryId: yup.string().required("Category Id required"),
    ticketNumber: yup.number().required("Ticket Number is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    ticketSubject: yup.string().required("Ticket Subject is required"),
    dateOfCreation: yup.string().required("Date of creation required"),
    password: yup
      .string()
      .required("Please enter a password")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
        "Password must contain at least 1 letter and 1 number"
      ),
  });

  const [ticketsCreate, { isLoading: updateLoad, isSuccess: updateSuccess }] =
    useTicketsCreateMutation();

  const methods = useForm({
    mode: "all",

    // defaultValues,
    resolver: yupResolver(schemaResolver),
  });
  const { handleSubmit, control, reset, setValue } = methods;
  const { data: categoryOptionList } = useCategoryDropdownQuery();

  const onSubmit = (data) => {
    const postBody = data;
    ticketsCreate(postBody);
    // console.log(postBody);
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
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="ticketNumber">
                      Ticket Number
                    </Form.Label>
                    <Controller
                      name="ticketNumber"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="integer"
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
              <div class="row  g-2">
                <div className="col">
                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="email"
                            placeholder="Enter your email"
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
                    <Form.Label htmlFor="phone">Phone</Form.Label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="phone"
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
                    <Form.Label htmlFor="ticketSubject">
                      Ticket Subject
                    </Form.Label>
                    <Controller
                      name="ticketSubject"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your Ticket Subject"
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
                    <Form.Label htmlFor="role">Type</Form.Label>
                    <Controller
                      name="type"
                      type="text"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Select {...field} isInvalid={!!error}>
                            <option value="">Select Type</option>
                            {typeTicket.map((type) => (
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
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="password"
                            placeholder="Enter your password"
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
                    <Form.Label htmlFor="dateOfCreation">Date Sent</Form.Label>
                    <Controller
                      name="dateOfCreation"
                      control={control}
                      type="date"
                      render={({ field, fieldState: { error } }) => (
                        <div>
                          <DatePicker
                            className="form-control"
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
              </div>
            </div>
            <Button type="submit">Submit </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TicketsCreateUpdate;
