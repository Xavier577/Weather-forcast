import React, { Fragment } from "react";
import "./searchBar.css";
import SearchIcon from "./bx-search-alt.svg";

export default function SearchBar() {
  return (
    <Fragment>
      <form className="search-bar">
        <div id="search-icon">
          <img src={SearchIcon} alt="" />
        </div>
        <input type="text" placeholder="Your location"></input>
      </form>
    </Fragment>
  );
}
