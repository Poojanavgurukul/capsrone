import React from "react";
import "./Docpage.css";
import { Input } from "antd";
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

const { TextArea } = Input;

class Userwritingpage extends React.Component {
  constructor() {
    super();

    var today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    this.state = {
        date: date
    };
}
  render() {
    return (
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
      <div style={{ margin: "30px" }}>
        <div className="containerhole">
          <span className="sometext">{this.state.date}</span>
          <div className="subhole">
            <span className="sometext1">FullName</span>
            <input></input>
            <span className="sometext1">Aadhaar Number</span>
            <input></input>
            <span className="sometext1">Phone Number</span>
            <input></input>
          </div>
          <div className="imagebox" />
        </div>   
       <Link to="/"> <h4 style={{marginLeft:"1125px"}}>Logout</h4></Link>
        <div className="box">
        <h4 style={{display:'inline-block', margin:'3px'}}>Write Your Wish here</h4>
          <TextArea rows={40} />
        </div>
        <div className="btndiv">
          <Link to ="/nomineform"><button className="btnsubmit">Submit</button></Link>
        </div>
      </div>
      </Animated>

    );
  }
}

export default Userwritingpage;
