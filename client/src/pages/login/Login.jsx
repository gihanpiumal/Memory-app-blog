import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="form">
          <div className="top">
            <span className="title">Login</span>
          </div>
          <div className="center">
            <TextField
              className="input"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              className="input"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="bottom">
            <p className="bottomText">
              <a href="#">Forgot password?</a>
            </p>
            <div className="loginBtn">
              <Button variant="contained">
                Login Now
              </Button>
            </div>
            <p className="bottomText">
              Don't hava an acount <a href="/registration">Signup now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
