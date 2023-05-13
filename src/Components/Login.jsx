import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="Login_label_input">
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <span>Forgot your password ?</span>
      <button>SIGN IN</button>
      <span style={{fontWeight:'bolder'}}>Create account</span>
    </div>
  );
};

export default Login;
