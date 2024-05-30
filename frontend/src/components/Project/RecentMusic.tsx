import React from "react";
import MusicCarousel from "./MusicCarousel";
import { css } from "@emotion/css";
import { MoveLeft } from "lucide-react";

interface Album {
  _id: string;
  title: string;
  coverUrl?: string;
}

interface Artist {
  _id: string;
  name: string;
}

interface MusicItem {
  _id: string;
  title: string;
  album?: Album;
  artist?: Artist;
  coverUrl?: string;
}

interface MusicProps {
  musicItems: MusicItem[];
}

const RecentMusic: React.FC<MusicProps> = ({ musicItems }) => {
  return (
    <div
      className={css`
        background-color: #264653;
        text-align: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-bottom: 4rem;
        padding-top: 4rem;
      `}
    >
      <h1>Recent Music</h1>
      <MusicCarousel musicItems={musicItems} />
      <div
        className={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          font-style: italic;
          color: gray;
        `}
      >
        {" "}
        Slide to
        <MoveLeft size={48} color="gray" />
      </div>
    </div>
  );
};

export default RecentMusic;
