import React, {useState} from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";


//For Design Purposes
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

const Login = (props) => {
  const [needRegistration, setNeedRegistration] = useState("")
  const onFinish = (values) => {
    for (let key in localStorage) {
      if (key === values.email) {
        let storedData = JSON.parse(localStorage.getItem(values.email));
        if (storedData.password === values.password) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("currentUser", values.email);
          console.log("Success");
          props.history.push("/");
        } else {
          console.log("Sorry Password is incorrect");
          setNeedRegistration("Sorry Password is incorrect")
          break
        }
      }
      else {
        setNeedRegistration("Email ID is not registered with us, Please Register to continue")
    }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <br></br>
      <h2 style={{fontWeight:'bold'}}>Login Page</h2>
      <Form
        {...layout}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
        <h4 style={{color:'red'}}>{needRegistration}</h4>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
        <Link to="/password-forgot">Forgot Password?</Link>
        
      </Form>
      <h4>
        Not a user? <Link to="/registration">Register Now</Link>
      </h4>
    </>
  );
};

export default Login;
