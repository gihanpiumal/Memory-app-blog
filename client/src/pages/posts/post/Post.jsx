import React from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./post.scss";

const Post = () => {
  return (
      <div className="post">
        <div className="header">
          <div className="creator">
            <div className="avatar">
              <Avatar
                alt="Remy Sharp"
                src={require("../../../data/avatar.jpg")}
              />
            </div>
            <div className="nameDate">
              <span className="name">Jhone Pole</span>
              <span className="date">Aprial 13,2022</span>
            </div>
          </div>
          <div className="bottons">
            <IconButton aria-label="settings">
              <MoreVertIcon style={{color: "white"}} />
            </IconButton>
          </div>
        </div>

        <div className="center">
          <img
            src={require("../../../data/product8.jpg")}
            alt=""
            className="post"
          />
        </div>

        <div className="bottum">
          <div className="desc">
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              error earum? In doloribus minus eligendi. Exercitationem animi
              impedit totam eos, necessitatibus similique.
            </p>
          </div>
          <div className="botton">
            <div className="items">
              <FavoriteIcon className="icon"/>
              <ShareIcon className="icon"/>

            </div>
          </div>
        </div>
      </div>

  );
};

export default Post;
