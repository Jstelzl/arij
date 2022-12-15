import React, { Component } from "react";
import "../../App.css";

function Login() {

  return (
    <form id="login-form">
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password:</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className=''>
          <button data-testid="button" type="login">Login</button>
        </div>
      </div>
    </form>
  );
}
export default Login;