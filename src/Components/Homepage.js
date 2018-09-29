import React from "react";
import Navbar from "./Navbar.js";
import NormalLoginForm from "./Loginpage.js";
import Signup from "./Signup.js";
import Userwritingpage from "./Docpage.js";
import Register from "./Register.js";
import Nomineform from './Nomineform.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Submision from './Aftersubmision';
import Sub from './AfterNomine';

class Homepage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route path="/login" component={NormalLoginForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/requestform" component={Register} />
          <Route path="/blockpage" component={Userwritingpage} />
          <Route path="/nomineform" component={Nomineform} />
          <Route path="/submission" component={Submision} />
          <Route path="/nominesubmission" component={Sub} />
        </div>
      </Router>
    );
  }
}

export default Homepage;
