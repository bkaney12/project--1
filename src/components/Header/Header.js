import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FaShoppingCart, FaBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebase-config";

import "./Header.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";
import { setUser } from "../../store/reducers/authReducer";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";

const Header = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  // console.log(user, "user useSelector");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });
  }, []);

  return (
    <>
      <Nav>
        {/* <img
          src="https://getlogovector.com/wp-content/uploads/2020/04/atp-tour-inc-logo-vector.png"
          alt=""
        /> */}
        <Link to="/">
          <img
            className="header-logo"
            src="https://i.pinimg.com/564x/56/68/b5/5668b5d4bd3fa872d77a14c6ded528f1.jpg"
            alt=""
          />
        </Link>

        {/* <NavLink to="/">
          <img src="" alt="" />
        </NavLink> */}
        <Bars />

        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}

        <NavMenu>
          {" "}
          {/* <NavLink to="/wishlist" activeStyle>
            <FaRegHeart />
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to="/sign-in">Sign In</NavBtnLink> */}
          <Dropdown as={ButtonGroup}>
            {/* <Button variant="success">Account</Button> */}

            {user ? (
              <>
                <p className="mt-3">{user.email}</p>
                <Dropdown.Toggle
                  split
                  variant="default"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2" onClick={() => logout()}>
                    Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </>
            ) : (
              <Link to="/signin">
                <Button variant="contained">Sign In</Button>
              </Link>
            )}

            {/* <Dropdown.Toggle
              split
              variant="default"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="/signin">Sign in</Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
          <NavLink to="/favorites">
            <span className="fav-counter">{count}</span>
            <button className="btn">
              <FaBookmark style={{ height: "100px", color: "violet" }} />
            </button>
          </NavLink>
          <Link to="/signUp">
            <Button variant="contained">Sign Up</Button>
          </Link>
          {/* <NavLink to="/cart" activeStyle>
            <FaShoppingCart />
          </NavLink> */}
        </NavMenu>
      </Nav>
      <hr className="header-top__seperator" />

      {/* <div className="header">
        <div className="header-top">
          <div className="header-top__logo">
            <a href="/" className="header-logo">
              {" "}
              <img
                src="https://getlogovector.com/wp-content/uploads/2020/04/atp-tour-inc-logo-vector.png"
                alt=""
              />
            </a>
          </div>
          <div className="header-top__navbar">
            <div className="header-top__navigation">
              <div className="navbar">
                <a href="/" className="navbar-item">
                  Home
                </a>

                <a href="/shop" className="navbar-item">
                  Shop
                </a>
                <a href="/blog" className="navbar-item">
                  Blog
                </a>
                <a href="/wishlist" className="navbar-item">
                  Wishlist
                </a>
                <a href="/account" className="navbar-item">
                  Account
                </a>
              </div>
            </div>
            <hr className="header-top__seperator" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
