import React from "react";
import { MusicCardContainer } from "../common/styles/MusicCardStyles";
import MusicCard from "../common/MusicCard";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

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
  {
    id: 16,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 17,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 18,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
  {
    id: 19,
    title: "Song Three",
    artist: "Artist Three",
    coverUrl: "https://picsum.photos/150/150?music?9",
  },
];

const AllAlbum = (props: Props) => {
  return (
    <div>
      <h1
        className={css`
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 3rem;
        `}
      >
        All Album
      </h1>
      <MusicCardContainer>
        {musicItems.map((musicItem) => (
          <Link
            to={`/song/album/${musicItem.id}`}
            className={css`
              text-decoration: none;
            `}
            key={musicItem.id}
          >
            <MusicCard musicItems={[musicItem]} />
          </Link>
        ))}
      </MusicCardContainer>
    </div>
  );
};

export default AllAlbum;
