import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div
        style={{
          width: "350px",
        }}
        className="border p-5 rounded shadow-lg ">
        <h3 className="text-center pb-3">Login Page</h3>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-3">
          Don't have an Account? <a href="Registation.jsx">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
