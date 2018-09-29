import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import {Animated} from "react-animated-css";
import { Form, Icon, Input, Button} from "antd";
const FormItem = Form.Item;

class Signup extends React.Component {
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
        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <div className="body">
          <div className="form">
            <div style={{ margin: "50px" ,marginTop:"101px"}}>
              <h1 style={{ marginLeft: "50px",fontFamily: "ubuntu" }}>User Signup</h1>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator("FullName", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,0.25)" }}
                        />
                      }
                      placeholder="Fullname"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("userName", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,0.25)" }}
                        />
                      }
                      placeholder="username"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("Email", {
                    rules: [
                      { required: true, message: "Please input your Email!" }
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
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,0.25)" }}
                        />
                      }
                      type="password"
                      placeholder="password"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("Aadhaar", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Aadhaar!"
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
                  {getFieldDecorator("Phone", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Phone!"
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
                      placeholder="Phone"
                    />
                  )}
                </FormItem>
                <FormItem>
                  <div className="btn">
                  <Link to="/login">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Sign up
                    </Button>
                    </Link>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
        </Animated>
      </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Signup);
export default WrappedNormalLoginForm;
