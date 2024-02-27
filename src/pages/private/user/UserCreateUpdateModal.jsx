//@ External Lib Import
import { Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import genderOption from "../../../constants/static/gender";
import roleOption from "../../../constants/static/roleOption";
import statusOption from "../../../constants/static/statusOption";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  useUserCreateMutation,
  useUserUpdateMutation,
} from "../../../redux/service/user/userService";
import { useEffect } from "react";

//@ main component
const UserCreateUpdate = ({
  modal,
  setModal,
  toggle,
  defaultValues,
  editData,
}) => {
  console.log(defaultValues);
  const [userCreate, { isLoading, isSuccess }] = useUserCreateMutation();

  console.log(userCreate);

  const [userUpdate, { isLoading: updateLoad, isSuccess: updateSuccess }] =
    useUserUpdateMutation();

  const schemaResolver = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Please enter a password")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
        "Password must contain at least 1 letter and 1 number"
      ),
    role: yup
      .string()
      .typeError("invalid role")
      .required("role is required")
      .oneOf(["FREELANCER", "ADMIN", "SELLER", "BUYER"]),

    status: yup
      .string()
      .typeError("invalid status")
      .required("status is required")
      .oneOf(["PENDING", "INACTIVE", "ACTIVE"]),
  });

  const methods = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schemaResolver),
  });

  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    const postBody = data;
    if (!editData) {
      userCreate(postBody);
    } else {
      const trasferData = {
        address: postBody?.address,
        city: postBody?.city,
        dateOfBirth: postBody?.dateOfBirth,
        email: postBody?.email,
        fax: postBody?.fax,
        gender: postBody?.gender,
        name: postBody?.name,
        password: postBody?.password,
        phoneNumber: postBody?.phoneNumber,
        role: postBody?.role,
        state: postBody?.state,
        status: postBody?.status,
        zip: postBody?.zip,
      };
      userUpdate({ postBody: trasferData, id: postBody?._id });
    }
  };

  useEffect(() => {
    if (isSuccess || updateSuccess) {
      setModal(false);
    }
  }, [isSuccess, updateSuccess]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [JSON.stringify(defaultValues)]);

  return (
    <Card className={classNames("", { "d-none": !modal })}>
      <Card.Body>
        <Modal
          show={modal}
          onHide={toggle}
          backdrop="static"
          keyboard={false}
          size="lg">
          <Modal.Header onHide={toggle} closeButton>
            <h4>User Add</h4>
          </Modal.Header>

          <Modal.Body>
            <form
              id="registerForm"
              onSubmit={handleSubmit(onSubmit)}
              noValidate>
              <div className="mb-3">
                <div className="row">
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
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="email">Email address</Form.Label>
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
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="dateOfBirth">
                        Date Of Birth
                      </Form.Label>
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Control
                              {...field}
                              type="date"
                              placeholder="Enter your Date Of Birth"
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
                      <Form.Label htmlFor="gender">Gender</Form.Label>
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                          <Form.Select {...field}>
                            <option value="">{"Select gender"}</option>
                            {genderOption.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="phoneNumber">
                        Phone Number
                      </Form.Label>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Control
                              {...field}
                              type="tel"
                              placeholder="Enter your phone number"
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

                <div className="row mt-3">
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="fax">Fax</Form.Label>
                      <Controller
                        name="fax"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your fax number"
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="address">Address</Form.Label>
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your address"
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="city">City</Form.Label>
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your city"
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="state">State</Form.Label>
                      <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your state"
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Form.Label htmlFor="zip">Zip Code</Form.Label>
                      <Controller
                        name="zip"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your zip code"
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-4">
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
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-4">
                    <Form.Group>
                      <Form.Label htmlFor="role">Role</Form.Label>
                      <Controller
                        name="role"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Select {...field} isInvalid={!!error}>
                              <option value="">Select Role</option>
                              {roleOption.map((type) => (
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
      </Card.Body>
    </Card>
  );
};

export default UserCreateUpdate;
