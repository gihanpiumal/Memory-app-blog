import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SideContainer from "../../components/sideContainer/SideContainer";
import Posts from "../posts/Posts";

import "./home.scss";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Posts/>
        </div>
        <div className="sideContainer">
          <SideContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
