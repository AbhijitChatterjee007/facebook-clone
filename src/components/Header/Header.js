import React from "react";
import logo from "../../images/facebook-logo.png";
import Search from "@material-ui/icons/Search";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";
import { useStateValue } from "../../StateProvider/StateProvider";

const Header = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="facebook logo" />
      </div>
      <div className="header__input">
        <input
          placeholder="Facebook Search"
          inputProps={{ "aria-label": "description" }}
        />
        <Search />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontsize="large" />
        </div>
        <div className="header__option header__option">
          <Flag fontsize="large" />
        </div>
        <div className="header__option header__option">
          <SubscriptionsOutlined fontsize="large" />
        </div>
        <div className="header__option header__option">
          <SupervisedUserCircle fontsize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
