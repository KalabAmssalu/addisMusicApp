import React from "react";
import MusicCarousel from "./MusicCarousel";
import { css } from "@emotion/css";
type Props = {};

const musicItems = [
  {
    id: 1,
    title: "Song One",
    artist: "Artist One",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Song Two",
    artist: "Artist Two",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://via.placeholder.com/150",
  },
];

const RecentMusic = (props: Props) => {
  return (
    <div
      className={css`
        background-color: #264653;
        text-align: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-bottom: 6rem;
        padding-top: 4rem;
      `}
    >
      <h1>Recent Music</h1>
      <MusicCarousel musicItems={musicItems} />
    </div>
  );
};

export default RecentMusic;
