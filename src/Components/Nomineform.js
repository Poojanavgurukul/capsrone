import React from "react";
import "./Nomineform.css";
import { Input } from "antd";

class Nomineform extends React.Component {
  render() {
    return (
      <div style={{ margin: "30px"}}>
      <div className="colorbox">
        <div className="headsome">
          <h1 style={{ display: "inline-block",marginTop:"20px" }}>Nomination Form</h1>
        </div>
        <div>
          <div className="indent">
            <div>
              <h3 className="headtext">Person1</h3>
              <div>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
            </div>
            <div>
              <h3 className="headtext">Person2</h3>
              <div>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
            </div>
            <div>
              <h3 className="headtext">Person3</h3>
              <div>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <h5 className="someheads">Field1</h5>
                <Input placeholder="default size" className="formnomine" />
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
            <button className="submitbtn">Submit</button>
            </div>
            <div style={{margin:"10px"}}>
            <button className="cnlbtn">Cancel</button>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Nomineform;
