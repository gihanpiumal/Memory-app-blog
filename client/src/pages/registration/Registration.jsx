import React, { useState } from "react";
import Joi, { object } from "joi";
import { useSelector, useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Modal } from "antd";

import "./registration.scss";

const schema = Joi.object({
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string()
    .required()
    .empty("")
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "xxx@xx.xx",
      ""
    )
    .label("Email"),
  phone: Joi.string()
    .required()
    .regex(
      /^(070)\d{7}$|^(071)\d{7}$|^(072)\d{7}$|^(074)\d{7}$|^(075)\d{7}$|^(076)\d{7}$|^(077)\d{7}$|^(078)\d{7}$/,
      "07xxxxxxxx"
    )
    .label("Mobile Number"),
  Avatar: Joi.string().empty("").label("Profile Picture"),
  password: Joi.string().required().label("Password"),
});

const Registration = () => {
  const [isOtpPopup, setIsOtpPopup] = useState(false);

  const showModal = () => {
    setIsOtpPopup(true);
  };

  const handleOk = () => {
    setIsOtpPopup(false);
  };

  const handleCancel = () => {
    setIsOtpPopup(false);
  };

  let userData = useSelector((state) => state.USERS);
  console.log(userData);
  return (
    <div className="registration">
      <Modal
        className="modal"
        open={isOtpPopup}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modalStyle">
          <h3 className="title" style={{ textAlign: "center" }}>
            Please enter the One-Time Pasword to verify your account
          </h3>
          <p style={{ textAlign: "center" }} className="subTitle">
            A One-Time-Password has been send to email
          </p>
          <TextField
            style={{ width: "50%", marginLeft: "120px" }}
            className="input"
            id="standard-basic"
            label="OTP"
            variant="standard"
          />

          <div
            className="verifyBtn"
            style={{ marginTop: "20px", marginLeft: "190px" }}
          >
            <Button variant="contained">Verify</Button>
          </div>
          <div
            className="resend"
            style={{ marginTop: "20px", marginLeft: "150px" }}
          >
            <a href="#" className="resensPword">
              Resend One-Time-Password
            </a>
          </div>
        </div>
      </Modal>
      <div className="wrapper">
        <div className="form">
          <div className="top">
            <span className="title">Registration</span>
          </div>
          <div className="center">
            {/* <div className="modal"> */}

            {/* </div> */}
            <TextField
              className="input"
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <TextField
              className="input"
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
            <TextField
              className="input"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              className="input"
              id="standard-basic"
              label="Phone No"
              variant="standard"
            />
            <div className="uploadBtn">
              <Button size="small" variant="contained" component="label">
                Upload Profile Picture
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </div>
            <TextField
              className="input"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="bottom">
            <FormControlLabel
              control={<Checkbox />}
              label="I accept all terms and conditions"
            />
            <div className="registerBtn">
              <Button onClick={showModal} variant="contained">
                Register Now
              </Button>
            </div>
            <p className="bottomText">
              already hava an acount <a href="/login">Login now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
