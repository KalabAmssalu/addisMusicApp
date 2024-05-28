import React from "react";
import { MusicCardContainer } from "../common/MusicCardStyles";
import MusicCard from "../common/MusicCard";
import { css } from "@emotion/css";

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
  {
    id: 9,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 10,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 11,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 12,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 13,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 14,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 15,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
];

const AllMusic = (props: Props) => {
  return (
    <div>
      <h1
        className={css`
          text-align: center;
        `}
      >
        All Music
      </h1>
      <MusicCardContainer>
        <MusicCard musicItems={musicItems} />
      </MusicCardContainer>
    </div>
  );
};

export default AllMusic;
