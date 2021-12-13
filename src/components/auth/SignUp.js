import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout, register } from "../../store/actions/authActions";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);

    const values = {
      ...state,
      [e.target.id]: e.target.value,
    };
    setState(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(state);
    console.log(state, "register");
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <form
            style={{ minHeight: "400px" }}
            className="col-12 col-md-4 mt-4 "
          >
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <label for="author">
              {" "}
              <b>Email</b>
            </label>
            <input
              // onChange={(e) => {
              //   setLoginEmail(e.target.value);
              // }}
              onChange={handleChange}
              placeholder="e-mail"
              className="desc"
              type="email"
              id="email"
            />
            <label for="author">
              {" "}
              <b>Password</b>
            </label>
            <input
              // onChange={(e) => setLoginPassword(e.target.value)}
              onChange={handleChange}
              placeholder="password"
              className="desc"
              type="password"
              id="password"
            />

            <div className="input-field">
              <Link to="/">
                <button className="btn btn-dark" onClick={handleSubmit}>
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
