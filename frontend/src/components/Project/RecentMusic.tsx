import React from "react";
import MusicCarousel from "./MusicCarousel";
import { css } from "@emotion/css";
import { MoveLeft } from "lucide-react";
type Props = {};

const musicItems = [
  {
    id: 1,
    title: "Song One",
    artist: "Artist One",
    coverUrl: "https://picsum.photos/150/150?music?1",
  },
  {
    id: 2,
    title: "Song Two",
    artist: "Artist Two",
    coverUrl: "https://picsum.photos/150/150?music?2",
  },
  {
    id: 3,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?3",
  },
  {
    id: 4,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?4",
  },
  {
    id: 5,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?5",
  },
  {
    id: 6,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?6",
  },
  {
    id: 7,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?10",
  },
  {
    id: 8,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
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
