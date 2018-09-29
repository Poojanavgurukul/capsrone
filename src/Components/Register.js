import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import { Animated } from "react-animated-css";
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
      <div>
        <div className="navcolor">
          <div className="nav">
            <div className="logos">
              <p className="content1">Secret Wish</p>
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
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div>
              <div className="head head1">
                <h2 style={{ fontFamily: "ubuntu" }}>Request Form</h2>
              </div>
              <div className="clg clg1 clg2">
                <div className="containerbox1" style={{ marginTop: "117px" }}>
                  <p className="subhead">Details of Deceased</p>
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
                          placeholder="Phone "
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("Aadhaar", {
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
                          placeholder="Aadhaar"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("Relation", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Relation"
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
                          type="text"
                          placeholder="Relation"
                        />
                      )}
                    </FormItem>
                    <div className="document">
                      <Basic />
                    </div>
                  </Form>
                  <div className="btn1">
                    {" "}
                    <Link to ="/submission">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Submit
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Register);
export default WrappedNormalLoginForm;
