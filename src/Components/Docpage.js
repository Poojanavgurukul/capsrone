import React from "react";
import "./Docpage.css";
import { Input,Icon } from "antd";
const { TextArea } = Input;

class Userwritingpage extends React.Component {
  render() {
    return (
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
        <Icon type="form" />
        <h4 style={{display:'inline-block', margin:'3px'}}>Write Your Block here</h4>
          <TextArea rows={40} />
        </div>
        <div className="btndiv">
          <button className="btnsubmit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Userwritingpage;
