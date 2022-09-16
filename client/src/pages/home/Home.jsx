import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./home.scss";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="home">
        <Sidebar />
        <div className="homeContainer">home Container</div>
        <div className="sideContainer">side container</div>
      </div>
    </div>
  );
};

export default Home;
