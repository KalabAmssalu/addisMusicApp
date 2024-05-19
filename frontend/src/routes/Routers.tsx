import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SongDetail from "../pages/song/SongDetail";
import Song from "../pages/song/Song";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

type Props = {};

const Routers = (props: Props) => {
  return (
    <Routes>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/song" element={<Song />} />
      <Route path="/song/:id" element={<SongDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
