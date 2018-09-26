import React from "react";
import Navbar from "./Navbar.js";
import NormalLoginForm from "./Loginpage.js";
import Signup from "./Signup.js";
import Register from './Register.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route path="/login" component={NormalLoginForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/Requestform" component={Register} />
        </div>
      </Router>
    );
  }
}

export default Homepage;
