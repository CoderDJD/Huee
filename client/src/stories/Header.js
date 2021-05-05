import React from "react";
import PropTypes from "prop-types";
import logo from "./assets/logo.svg";
import { Button } from "./Button";
import "./header.css";

export const Header = ({ logOut }) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo} alt="our-logo" />
        <h1>Hoot</h1>
      </div>
      <div>
        <Button size="small" onCLick={logOut} label="Log out" />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  logOut: PropTypes.func,
};

Header.defaultProps = {
  user: null,
};
