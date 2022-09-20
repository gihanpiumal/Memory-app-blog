import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";

import {getUsers} from "./services/actions/userAction"

import "./app.scss";

const App = () => {
  const dispatch = useDispatch();
  
  let objUsers = {
    firstName: "",
  };

  
  useEffect(() => {
    dispatch(getUsers(objUsers));
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/registration">
            <Route index element={<Registration />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
