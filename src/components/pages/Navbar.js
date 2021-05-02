import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Searchbar } from "./";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          <form onSubmit={<Redirect to="/search" />}>
            <input type="text" />
          </form>
        </ul>
      </div>
    );
  }
}

export default Navbar;
