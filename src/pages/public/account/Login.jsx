import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-5 rounded shadow-lg text-center">
        <h3 className="pb-3">Login Page</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
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
