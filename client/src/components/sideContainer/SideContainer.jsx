import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./sideContainer.scss";

const SideContainer = () => {
  const [showTruncate, setShowTruncate] = useState(true);

  return (
    <div className="sideContainer">
      <div className="wrapper">
        <div className="top">
          <div className="title">Online Firends</div>
          <div className="avatars">
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={require("../../data/avatar.jpg")} />
              <Avatar
                alt="Travis Howard"
                src={require("../../data/avatar2.jpg")}
              />
              <Avatar
                alt="Cindy Baker"
                src={require("../../data/avatar3.png")}
              />
              <Avatar
                alt="Agnes Walker"
                src={require("../../data/avatar4.jpg")}
              />
              <Avatar
                alt="Trevor Henderson"
                src={require("../../data/avatar.jpg")}
              />
            </AvatarGroup>
          </div>
        </div>
        <div className="center">
          <div className="centerTitle">Latest Posts</div>
          <div className="letastPosts">
            <div className="wrapper">
              <img
                src={require("../../data/product1.jpg")}
                alt=""
                className="post"
              />
              <img
                src={require("../../data/product2.jpg")}
                alt=""
                className="post"
              />
              <img
                src={require("../../data/product3.jpg")}
                alt=""
                className="post"
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomTitle">Latest Notifications</div>
          <div className="notifiactions">
            <div className="note">
              <p className="msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                cupiditate quae veniam molestiae consequatur...
              </p>
              <div className="noteBtn">
                <Button color="secondary">Dismis</Button>
                <IconButton aria-label="settings">
                  <MoreVertIcon style={{ color: "black" }} />
                </IconButton>
              </div>
            </div>
            <div className="note">
              <p className="msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                cupiditate quae veniam molestiae consequatur...
              </p>
              <div className="noteBtn">
                <Button color="secondary">Dismis</Button>
                <IconButton aria-label="settings">
                  <MoreVertIcon style={{ color: "black" }} />
                </IconButton>
              </div>
            </div>
            <div className="note">
              <p className="msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                cupiditate quae veniam molestiae consequatur...
              </p>
              <div className="noteBtn">
                <Button color="secondary">Dismis</Button>
                <IconButton aria-label="settings">
                  <MoreVertIcon style={{ color: "black" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
