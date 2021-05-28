import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

//For Design Purposes
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

const Registration = (props) => {
  const [message, setMessage] = useState("");
  const [confirmPassError, setConfirmPassError] = useState(null);
  const onFinish = (values) => {
    if (values.password === values.con_password) {
      for (let key in localStorage) {
        if (key === values.email) {
          setMessage("User Already Exists, Please use a different Email");
          break;
        } else {
          // console.log("Success:", values);
          localStorage.setItem(values.email, JSON.stringify(values));
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("currentUser", values.email);
          props.history.push("/");
        }
      }
    } else {
      setConfirmPassError("Please enter both passwords same");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2 style={{ marginTop: 50 }}>Welcome to Registration Page</h2>
      <h4 style={{ color: "red" }}>{message}</h4>
      <hr></hr>
      <Form
        {...layout}
        name="registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Valid email pattern is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <h4 style={{ color: "red" }}>{confirmPassError}</h4>
        <Form.Item
          label="Confirm Password"
          name="con_password"
          rules={[
            {
              required: true,
              message: "To confirm, both passwords must match !",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <h4>Security Question</h4>
        <h5>What's your favorite Pet animal?</h5>
        <Form.Item
          label="Answer"
          name="security_answer"
          rules={[
            {
              required: true,
              message: "This will be required to retrieve your password",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Registration;
