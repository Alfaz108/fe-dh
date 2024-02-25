//@ External Lib Import
import { Button, Card, Form, Modal } from "react-bootstrap";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import genderOption from "../../../constants/static/gender";
import roleOption from "../../../constants/static/roleOption";
import statusOption from "../../../constants/static/statusOption";
import { useUserCreateMutation } from "../../../redux/service/user/userService";
import { useEffect } from "react";

export const DEFAULT_USER_VALUES = {
  name: "",
  email: "",
  password: "",
  role: "FREELANCER",
  status: "PENDING",
  address: "",
  city: "",
  dateOfBirth: "",
  fax: "",
  gender: "",
  phoneNumber: "",
  state: "",
  zip: "",
};

//@ main component
const UserCreateUpdate = ({ modal, setModal, toggle }) => {
  const [userCreate, { isLoading, isSuccess }] = useUserCreateMutation();

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
      .oneOf(["FREELANCER", "OTHER_ROLE"]),

    status: yup
      .string()
      .typeError("invalid status")
      .required("status is required")
      .oneOf(["PENDING", "DECLINE", "APPROVED", "BLOCK"]),
  });

  const methods = useForm({
    mode: "all",
    defaultValues: DEFAULT_USER_VALUES,
    resolver: yupResolver(schemaResolver),
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data) => {
    const postBody = data;
    userCreate(postBody);
  };

  useEffect(() => {
    if (isSuccess) {
      setModal(false);
    }
  }, [isSuccess]);

  return (
    <Card className={classNames("", { "d-none": !modal })}>
      <Card.Body>
        <Modal
          show={modal}
          onHide={toggle}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header onHide={toggle} closeButton>
            <h4>User Add</h4>
          </Modal.Header>

          <Modal.Body>
            <form
              id="registerForm"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
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
                      <Form.Label htmlFor="name">Name</Form.Label>
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
              </div>
              <div className="mt-3 text-end">
                <Button type="submit">Register</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserCreateUpdate;
