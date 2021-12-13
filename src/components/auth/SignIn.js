import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import { useLocation, useNavigate } from "react-router";

import { Link } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);

    const values = {
      ...state,
      [e.target.id]: e.target.value,
    };
    setState(values);
  };

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user, "you are logged in");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     login(auth, state);
  //     console.log(state);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
    console.log(state, "sign in");
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
            <h5 className="grey-text text-darken-3">Sign In</h5>
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
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
