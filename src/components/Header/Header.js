import React from "react";
import {
  Form,
  FormControl,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import {
  FaLinkedin,
  FaRegHeart,
  FaShoppingCart,
  RiAccountCircleLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Header.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";

const Header = () => {
  return (
    <>
      <Nav>
        {/* <img
          src="https://getlogovector.com/wp-content/uploads/2020/04/atp-tour-inc-logo-vector.png"
          alt=""
        /> */}
        <Link to="/">
          <img
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
            <Button variant="success">Account</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sign in</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink to="/cart" activeStyle>
            <FaShoppingCart />
          </NavLink>
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
