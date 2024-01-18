import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const activeClass = isActive ? "sidebar-btn active" : "sidebar-btn";
  return (
    <>
      <Link to={props.to}>
        <div className={activeClass}>
          <IconContext.Provider
            value={{ size: "24px", className: "sidebar-icon" }}
          >
            {props.icon}
            <span className="btn-title">{props.title}</span>
          </IconContext.Provider>
        </div>
      </Link>
    </>
  );
}
