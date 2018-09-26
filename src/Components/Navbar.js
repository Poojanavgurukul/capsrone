import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import Slider from "./Slider.js";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <div className="nav">
          <div className="logos">
            <img src={logo} alt="img" className="logo" />
            <p className="text">Secret Wish</p>
          </div>
          <div className="navtext">
            <Link to="/">
              <li className="content">Home</li>
            </Link>
            <Link to="/login">
              <li className="content">Login</li>
            </Link>
            <Link to="/signup">
              <li className="content">Signup</li>
            </Link>
            <Link to="/Requestform">
              {" "}
              <li className="content">RequestForm</li>
            </Link>
          </div>
          <div>
            <Slider />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12 ">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/3m5agpzM1Ok"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="motivatoinal"
                />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/-1sG4JlKm98"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="time"
                />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/WfWgThjXpXo"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="motivated"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
