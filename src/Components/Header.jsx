import React from "react";
import "./Header.css";
import logo from "../Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
    <div className="Header">
      <div>
        <img style={{ width: "200px" }} src={logo} alt="Logo" />
      </div>
      <div className="Header_icons">
        <SearchIcon className="Header_icons_style" />
        <PersonIcon className="Header_icons_style" />
        <FavoriteIcon className="Header_icons_style" />
        <ShoppingBagIcon className="Header_icons_style" />
        <MenuIcon className="Header_icons_style" />
      </div>
    </div>
      <div className="Header_menu">
        <label>NEW ARRIVAL</label>
        <label>CHIKANKARI</label>
        <label>SUIT SETS</label>
        <label>KURTIS</label>
        <label>PASTEL</label>
      </div>
      </>
  );
};

export default Header;
