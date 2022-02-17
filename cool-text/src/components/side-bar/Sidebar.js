import React from "react";
import "./SideBar.css"
import { SideBarData } from "./SideBarData";


function sidebar() {

   
  const navigate = (link) => {
   window.location.pathname = link;
  };

  return (
    <div className="sidebar">
      <img id="sidebarlogo" src="" alt="LOGO" />

      <ul className="sidebarlist">
        {SideBarData.map((val, key) => {
          return (
            <li
              className="sidebarlistitems"
              key={key}
              onClick={() => {
                navigate(val.link)
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default sidebar;
