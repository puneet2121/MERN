import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

import { signup } from "../auth/helper";
const Signup = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = value;

  const handleChange = (name) => (event) => {
    setValue({ ...value, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValue({ ...value, error: data.error, success: false });
        } else {
          setValue({
            ...value,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch();
  };
  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully. Please{" "}
        <Link to="/signin"> Login here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
      {error}
      </div>
    );
  };
  const signupForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>

            <button
              onClick={onSubmit}
              className="btn btn-success btn-block form-control"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign up Page" description="A page for user to signup">
      {successMessage()}
      {errorMessage()}
      {signupForm()}
      <p className="text-white text-center">{JSON.stringify(value)}</p>
    </Base>
  );
};

export default Signup;
