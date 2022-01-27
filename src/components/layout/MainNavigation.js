import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="quotes"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new-quote"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : " "
              }
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
