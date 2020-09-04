import React from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/create-user"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Create user
      </NavLink>
      <NavLink
        to="/users"
        className={classes.linkItem}
        activeClassName={classes.activeLink}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
