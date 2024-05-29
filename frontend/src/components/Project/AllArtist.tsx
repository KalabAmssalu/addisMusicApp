import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import ArtistCard from "../common/ArtistCard";
import { ArtistAvatarContainer } from "../common/styles/AllArtistStyle";

type Props = {};

const ArtistItems = [
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

const AllArtist = (props: Props) => {
  return (
    <div>
      <h1
        className={css`
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 3rem;
        `}
      >
        All Artist
      </h1>
      <ArtistAvatarContainer>
        {ArtistItems.map((ArtistItem) => (
          <Link
            to={`/song/artist/${ArtistItem.id}`}
            className={css`
              text-decoration: none;
            `}
            key={ArtistItem.id}
          >
            <ArtistCard ArtistItems={[ArtistItem]} />
          </Link>
        ))}
      </ArtistAvatarContainer>
    </div>
  );
};

export default AllArtist;
