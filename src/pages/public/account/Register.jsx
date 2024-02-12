import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterMutation } from "../../../redux/service/auth/authService";

export const DEFAULT_REGISTER_VALUES = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [register, { isSuccess, isLoading }] = useRegisterMutation();

  const schemaResolver = yup
    .object()
    .shape({
      name: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Invalid email")
        .required("Please enter your email"),
      password: yup
        .string()
        .required("Please enter a password")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
          "Password must contain at least 1 letter and 1 number"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: DEFAULT_REGISTER_VALUES,
    resolver: yupResolver(schemaResolver),
    mode: "all",
  });

  const onSubmit = (formData) => {
    const postBody = {
      name: formData?.name,
      email: formData?.email,
      password: formData?.password,
    };
    register(postBody);
  };

  if (isSuccess) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        style={{
          width: "350px",
        }}
        className="border p-5 rounded shadow-lg"
      >
        <h3 className="text-center pb-3">Register Page</h3>

        <form id="registerForm" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <Form.Group>
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Form.Control
                      {...field}
                      type="password"
                      placeholder="Confirm your password"
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
          <div className="mt-3 text-end">
            <Button type="submit">Register</Button>
          </div>
        </form>

        <p className="text-center mt-3">
          Have an Account?{" "}
          <Link
            className="text-cyan-700 hover:underline hover:text-orange-600"
            to="/auth/login"
          >
            Login Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
