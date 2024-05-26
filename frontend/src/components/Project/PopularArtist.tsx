import React from "react";
import ArtistCarousel from "./ArtistCarousel";
import { css } from "@emotion/css";

const musicItems = [
  {
    id: 1,
    artist: "Artist One",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    artist: "Artist Two",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    artist: "Artist Three",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    artist: "Artist Four",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    artist: "Artist Five",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    artist: "Artist Six",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    artist: "Artist Seven",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    artist: "Artist Eight",
    avatarUrl: "https://via.placeholder.com/150",
  },
];

const PopularArtist: React.FC = () => {
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
      <h1>Popular Artists</h1>
      <ArtistCarousel musicItems={musicItems} />
    </div>
  );
};

export default PopularArtist;
