import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <ul>
          <li>
            <HomeIcon className="icon" />
            <span>HomePage</span>
          </li>
          <li>
            <PagesIcon className="icon" />
            <span>Pages</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span>Groups</span>
          </li>
          <li>
            <StorefrontIcon className="icon" />
            <span>MarketPlace</span>
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Friends</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
