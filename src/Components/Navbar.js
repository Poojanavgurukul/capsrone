import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Animated } from "react-animated-css";
import Example from "./Cards";

class Navbar extends React.Component {
  render() {
    return (
      <div>
         <div className="navcolor">
          <div className="nav">
            <div className="logos">
              <li className="content1">Secret Wish</li>
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
              <Link to="/requestform">
                {" "}
                <li className="content">RequestForm</li>
              </Link>
            </div>
          </div>
        </div>
      <div>
        <div>
          <Animated
            animationIn="bounceInDown"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="background" />
          </Animated>
          <Example />

          <div style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12 ">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Px5Eop-kJs0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="jg"
                />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/YOqwq5wu8As"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="life"
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
          <Footer />
        </div>
      </div>
      </div>
    );
  }
}

export default Navbar;
