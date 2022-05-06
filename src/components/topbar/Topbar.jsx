import React from "react";
import "./topbar.scss";

import { Mail, Person } from "@material-ui/icons";

const Topbar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>Foo</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>Bar</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
