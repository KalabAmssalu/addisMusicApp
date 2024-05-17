import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import SongDetail from "../pages/song/SongDetail";
import Song from "../pages/song/Song";

import { Routes, Route } from "react-router-dom";

type Props = {};

const Routers = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/song" element={<Song />} />
      <Route path="/song/:id" element={<SongDetail />} />
    </Routes>
  );
};

export default Routers;
