import React from "react";

const Register = () => {
  return (
    <div>
      <div
        style={{
          width: "350px",
        }}
        className="border p-5 rounded shadow-lg ">
        <h3 className="text-center pb-3">Register Page</h3>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control  "
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="text-center">
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-3">
          Have an Account? <a href="Login.jsx">Login Page</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
