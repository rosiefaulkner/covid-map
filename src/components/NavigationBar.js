import React from "react";
import { NavLink } from "react-router-dom";
import './css/NavigationBar.css';

const activeStyle = 'menuItem';
const links = ['Home', 'Vaccinations', 'Statistics'];

export class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        {links.map(link => 
          <NavLink className={activeStyle} to="/">
          {link + " | "}
        </NavLink>
          )}
    </nav>
    );
  }
}
