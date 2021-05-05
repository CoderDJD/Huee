import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
export const Searchbar = ({ placeholder, clickHandler }) => (
  <article>
    <input placeholder={placeholder}></input>
    <FaSearch
      style={{
        paddingRight: ".5rem",
      }}
      onClick={clickHandler}
    />
  </article>
);

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  types: PropTypes.string,
  clickHandler: PropTypes.func,
};

Searchbar.defaultProps = {
  placeholder: "Enter Something",
  clickHandler: () => {
    console.log("Hello World!");
  },
};
