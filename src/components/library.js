import React, { useState, useEffect } from "react";
import APIKit from "../spotify.js";
import "./styles/library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      <div className="playlist-container">
        {playlists?.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <img
              className="playlist-image"
              src={playlist.images[0].url}
              alt="playlist_image"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle></AiFillPlayCircle>
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
