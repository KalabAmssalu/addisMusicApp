import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SongDetail from "../pages/song/SongDetail";
import Song from "../pages/song/Song";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Auth/Profile";
import Categories from "../pages/song/Categories";
import { useEffect } from "react";
import ArtistDetail from "../pages/song/ArtistDetail";
import AlbumDetail from "../pages/song/AlbumDetail";
import Album from "../pages/song/Album";
import Artist from "../pages/song/Artist";

type Props = {};

const Routers = (props: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/song" element={<Song />} />
        <Route path="/song/:id" element={<SongDetail />} />
        <Route path="/song/artist/:id" element={<ArtistDetail />} />
        <Route path="/song/album/:id" element={<AlbumDetail />} />
        <Route path="/song/album" element={<Album />} />
        <Route path="/song/artist" element={<Artist />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default Routers;
