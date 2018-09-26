import React from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
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
            <Link to="">
              <li className="content">Home</li>
            </Link>
            <Link to="/login">
              <li className="content">Login</li>
            </Link>
            <Link to="/signup">
              <li className="content">Signup</li>
            </Link>
            <Link to="/Requestform">
              <li className="content">RequestForm</li>
            </Link>
          </div>
        </div>
        <div className="body">
          <div className="form">
            <div style={{ margin: "120px" }}>
              <h1 style={{ marginLeft: "10px" }}>User Login</h1>
              <Form onSubmit={this.handleSubmit} className="login-form">
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
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <div className="btn">
                   <Link to="/Blockpage"> <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                    </Link>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
