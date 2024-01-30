import React, { useEffect, useState } from "react";
import "./styles/sidebar.css";
import profile from "../assets/my_profile.png";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import SidebarButton from "./sidebar-btn.js";
import apiClient from "../spotify.js";

export default function Sidebar() {
  const [image, setImage] = useState(profile);
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-picture" alt="profile_picture" />
      <div className="sidebar-btns">
        <SidebarButton icon={<MdSpaceDashboard />} title="Feed" to={"/"} />
        <SidebarButton
          icon={<FaGripfire />}
          title="Trending"
          to={"/trending"}
        />
        <SidebarButton icon={<FaPlay />} title="Player" to={"/player"} />
        <SidebarButton
          icon={<MdFavorite />}
          title="Favourite"
          to={"/favorite"}
        />
        <SidebarButton icon={<IoLibrary />} title="Library" to={"/library"} />
      </div>
      <SidebarButton icon={<FaSignOutAlt />} title="Logout" to={"/logout"} />
      {/* <div className="sidebar-btns">
        <Link to={"/"}>
          <div className="sidebar-btn">
            <IconContext.Provider
              value={{ size: "24px", className: "sidebar-icon" }}
            >
              <MdSpaceDashboard className="sidebar-icon" />
              <span className="btn-title">Feed</span>
            </IconContext.Provider>
          </div>
        </Link>
        <Link to={"/trending"}>
          <div className="sidebar-btn">
            <IconContext.Provider
              value={{ size: "24px", className: "sidebar-icon" }}
            >
              <FaGripfire className="sidebar-icon" />
              <span className="btn-title">Trending</span>
            </IconContext.Provider>
          </div>
        </Link>
        <Link to={"/player"}>
          <div className="sidebar-btn">
            <IconContext.Provider
              value={{ size: "24px", className: "sidebar-icon" }}
            >
              <FaPlay className="sidebar-icon" />
              <span className="btn-title">Player</span>
            </IconContext.Provider>
          </div>
        </Link>
        <Link to={"/favorite"}>
          <div className="sidebar-btn">
            <IconContext.Provider
              value={{ size: "24px", className: "sidebar-icon" }}
            >
              <MdFavorite className="sidebar-icon" />
              <span className="btn-title">Favourite</span>
            </IconContext.Provider>
          </div>
        </Link>
        <Link to={"/library"}>
          <div className="sidebar-btn">
            <IconContext.Provider
              value={{ size: "24px", className: "sidebar-icon" }}
            >
              <IoLibrary className="sidebar-icon" />
              <span className="btn-title">Library</span>
            </IconContext.Provider>
          </div>
        </Link>
      </div>

      <div className="sidebar-btn">
        <IconContext.Provider
          value={{ size: "24px", className: "sidebar-icon" }}
        >
          <FaSignOutAlt className="sidebar-icon" />
          <span className="btn-title">Logout</span>
        </IconContext.Provider>
      </div> */}
    </div>
  );
}
