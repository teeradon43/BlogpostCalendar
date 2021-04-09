import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>BlogPost Calendar</h1>

        <div class="post">
          <Link to="/post/someid">
            <h3>BarBQ Plaza Party</h3>
          </Link>

          <p>TMR BBQ PLAZA BUFFET AT Robinson Ladkrabang!</p>
        </div>
      </div>
    );
  }
}

export default Home;
