import React from "react";
import "./Docpage.css";
import { Input } from "antd";
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

const { TextArea } = Input;

class Userwritingpage extends React.Component {
  render() {
    return (
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
      <div style={{ margin: "30px" }}>
        <div className="containerhole">
          <span className="sometext">Date Stamp</span>
          <div className="subhole">
            <span className="sometext1">FullName</span>
            <span className="sometext1">Aadhaar Number</span>
            <span className="sometext1">Phone Number</span>
          </div>
          <div className="imagebox" />
        </div>
        <div className="box">
        <h4 style={{display:'inline-block', margin:'3px'}}>Write Your Block here</h4>
          <TextArea rows={40} />
        </div>
        <div className="btndiv">
          <Link to ="/Nomineform"><button className="btnsubmit">Submit</button></Link>
        </div>
      </div>
      </Animated>

    );
  }
}

export default Userwritingpage;
