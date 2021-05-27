import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link, useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const ForgotPassword = () => {
  const [message, setMessage] = useState(null);
  const onFinish = (values) => {
    var loggedUserData = JSON.parse(localStorage.getItem(values.email));
    if (values.answer === loggedUserData.security_answer) {
      loggedUserData.password = values.new_password;
      localStorage.setItem(values.email, JSON.stringify(loggedUserData));
      setMessage('Password Changed Successfully')
    }
    else {
        setMessage('You entered wrong answer of Security Question')
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h3>Forgot password</h3>
      <Form
        {...layout}
        name="reset-password"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email ID"
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required for Account identification",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h5>What's your Favorite Pet Animal?</h5>
        <Form.Item
          label="Answer"
          name="answer"
          rules={[
            {
              required: true,
              message: "This field is required for security purpose",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="new_password"
          rules={[
            {
              required: true,
              message: "Please input your new password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <h4 style={{ color: "red" }}>{message}</h4>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
