import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import { Form, Icon, Input, Button } from "antd";
import Basic from "./Documents";
const FormItem = Form.Item;

class Register extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
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
          <div className="head head1">
            <h2>Request Form</h2>
          </div>
          <div className="main">
            <div className="main2">
              <div className="clg clg1 clg2">
                <div className="containerbox1">
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      {getFieldDecorator("Name", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your name!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,0.25)" }}
                            />
                          }
                          placeholder="Name"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("Email", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Email!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="mail"
                              style={{ color: "rgba(0,0,0,0.25)" }}
                            />
                          }
                          placeholder="Email"
                          type="email"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("Phone", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your phone Number!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="phone"
                              style={{ color: "rgba(0,0,0,0.25)" }}
                            />
                          }
                          type="text"
                          placeholder="Phone Number"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("AadhaarNumber", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your AadhaarNumber!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="save"
                              style={{ color: "rgba(0,0,0,0.25)" }}
                            />
                          }
                          type="text"
                          placeholder="AadhaarNumber"
                        />
                      )}
                    </FormItem>
                    <Basic />
                  </Form>
                </div>
                <div className="containerbox2">
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,0.25)" }}
                          />
                        }
                        placeholder="Name"
                      />
                    </FormItem>
                    <FormItem>
                      <Input
                        prefix={
                          <Icon
                            type="mail"
                            style={{ color: "rgba(0,0,0,0.25)" }}
                          />
                        }
                        placeholder="Email"
                        type="email"
                      />
                    </FormItem>
                    <FormItem>
                      <Input
                        prefix={
                          <Icon
                            type="phone"
                            style={{ color: "rgba(0,0,0,0.25)" }}
                          />
                        }
                        type="text"
                        placeholder="Phone Number"
                      />
                    </FormItem>
                    <FormItem>
                      <Input
                        prefix={
                          <Icon
                            type="save"
                            style={{ color: "rgba(0,0,0,0.25)" }}
                          />
                        }
                        type="text"
                        placeholder="AadhaarNumber"
                      />
                    </FormItem>
                  </Form>
                  <Basic />
                </div>
              </div>
              <div className="btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Register);
export default WrappedNormalLoginForm;
