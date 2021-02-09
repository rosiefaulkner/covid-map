import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavigationBar.css";
import L from "leaflet";

const activeStyle = "menuItem";
const links = ["Home", "Vaccinations", "Statistics"];

export class NavigationBar extends React.Component {

  GetLogo(_iconSize) {
    return L.icon({
      iconUrl: require("./icons/logo.png"),
      iconSize: [_iconSize],
    });
  } 


  render() {
    return (
      <nav>
        <img src={this.GetLogo(60)} alt = ""/>
        {links.map((link) => (
          <NavLink className={activeStyle} to="/">
            {link + " | "}
          </NavLink>
        ))}
      </nav>
    );
  }
}
