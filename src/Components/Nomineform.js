import React from "react";
import "./Nomineform.css";
import { Input } from "antd";
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';

class Nomineform extends React.Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div style={{ margin: "30px"}}>
      <div className="colorbox">
        <div className="headsome">
          <h1 style={{ display: "inline-block",marginTop:"20px", }}>Nomine Form</h1>
        </div>
        <div>
          <div className="indent">
            <div>
              <h3 className="headtext">Person1</h3>
              <div>
                <h5 className="someheads">Name</h5>
                <Input placeholder="Name" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Phone</h5>
                <Input placeholder="Phone" className="formnomine" style={{marginLeft:"5px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Email</h5>
                <Input placeholder="Email" className="formnomine"  style={{marginLeft:"13px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Relation</h5>
                <Input placeholder="Relation" className="formnomineRel" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
            </div>
            <div>
              <h3 className="headtext">Person1</h3>
              <div>
                <h5 className="someheads">Name</h5>
                <Input placeholder="Name" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Phone</h5>
                <Input placeholder="Phone" className="formnomine" style={{marginLeft:"5px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Email</h5>
                <Input placeholder="Email" className="formnomine"  style={{marginLeft:"13px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Relation</h5>
                <Input placeholder="Relation" className="formnomineRel" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
            </div>
            <div>
              <h3 className="headtext">Person1</h3>
              <div>
                <h5 className="someheads">Name</h5>
                <Input placeholder="Name" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Phone</h5>
                <Input placeholder="Phone" className="formnomine" style={{marginLeft:"5px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Email</h5>
                <Input placeholder="Email" className="formnomine"  style={{marginLeft:"13px"}} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Relation</h5>
                <Input placeholder="Relation" className="formnomineRel" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
            </div>
          </div>
        </div>
        <div className="btnbox">
            <div style={{margin:"10px"}}>
           <Link to ="/nominesubmission"> <button className="submitbtn">Submit</button></Link>
            </div>
            <div style={{margin:"10px"}}>
           <Link to ="/"> <button className="cnlbtn">Cancel</button></Link>
            </div>
        </div>
        </div>
      </div>
      </Animated>
    );
  }
}

export default Nomineform;
