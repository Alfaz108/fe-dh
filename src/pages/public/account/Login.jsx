import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "../../../redux/service/auth/authService";

export const DEFAULT_LOGIN_VALUES = {
  email: "rumongfafy@gmail.com",
  password: "pass1234@",
};
const Login = () => {
  const naviagte = useNavigate();
  const [login, { data, isLoading }] = useLoginMutation();

  const schemaResolver = yup
    .object()
    .shape({
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
    })
    .required();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: DEFAULT_LOGIN_VALUES,
    resolver: yupResolver(schemaResolver),
    mode: "all",
  });

  const onSubmit = (formData) => {
    login(formData);
  };

  useEffect(() => {
    if (data?.data?.access_token) {
      localStorage.setItem("token", data?.data?.access_token);
      naviagte("/");
    }
  }, [data]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-5 rounded shadow-lg text-center">
        <h3 className="pb-3">Login Page</h3>
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)} noValidate>
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
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>

        <p className="mt-3">
          Don't have an Account?{" "}
          <Link
            className="text-cyan-700 hover:underline hover:text-orange-600"
            to="/auth/register"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
