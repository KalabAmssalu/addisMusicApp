import React from "react";
import ArtistCarousel from "./ArtistCarousel";
import { css } from "@emotion/css";

const musicItems = [
  {
    id: 1,
    artist: "Artist One",
    avatarUrl: "https://picsum.photos/150/150?music?1",
  },
  {
    id: 2,
    artist: "Artist Two",
    avatarUrl: "https://picsum.photos/150/150?music?2",
  },
  {
    id: 3,
    artist: "Artist Three",
    avatarUrl: "https://picsum.photos/150/150?music?3",
  },
  {
    id: 4,
    artist: "Artist Four",
    avatarUrl: "https://picsum.photos/150/150?music?4",
  },
  {
    id: 5,
    artist: "Artist Five",
    avatarUrl: "https://picsum.photos/150/150?music?5",
  },
  {
    id: 6,
    artist: "Artist Six",
    avatarUrl: "https://picsum.photos/150/150?music?6",
  },
  {
    id: 7,
    artist: "Artist Seven",
    avatarUrl: "https://picsum.photos/150/150?music?7",
  },
  {
    id: 8,
    artist: "Artist Eight",
    avatarUrl: "https://picsum.photos/150/150?music?8",
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
