import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.js";
import Feed from "./components/feed.js";
import Trending from "./components/trending.js";
import Library from "./components/library.js";
import Player from "./components/player.js";
import Favorite from "./components/favorite.js";
import Login from "./components/login.js";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//box-sizing:border-box is a css property that makes the padding and
//border of an element included in the width and height of the element
