import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link, useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const ResetPassword = () => {
  const [message, setMessage] = useState(null);
  const { id } = useParams();

  const onFinish = (values) => {
    var loggedUserData = JSON.parse(localStorage.getItem(id));
    if (values.old_password === values.new_password) {
      setMessage("You cannot set old password as new one");
    } else {
      if (loggedUserData.password === values.old_password) {
        loggedUserData.password = values.new_password;
        localStorage.setItem(id, JSON.stringify(loggedUserData));
        setMessage("Password Reset Successfully");
      } else {
        setMessage("Old password is incorrect");
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1>Reset Password</h1>
      <Form
        {...layout}
        name="reset-password"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Old Password"
          name="old_password"
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
        <Link to="/password-forgot">Forgot Password?</Link>
      </Form>
    </div>
  );
};

export default ResetPassword;
