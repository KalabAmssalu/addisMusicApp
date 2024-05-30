import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  MusicCover,
  MusicTitle,
  ArtistName,
  AlbumName,
} from "../common/styles/CarouselStyles";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

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

interface MusicCarouselProps {
  musicItems: MusicItem[];
}

const MusicCarousel: React.FC<MusicCarouselProps> = ({ musicItems }) => {
  if (!musicItems) {
    return <div>No music items available</div>;
  }

  return (
    <CarouselContainer>
      {musicItems.map((item, index) => (
        <Link
          to={`/song/${item._id}`}
          key={item._id}
          className={css`
            text-decoration: none;
          `}
        >
          <CarouselItem key={item._id}>
            <MusicCover src={item.coverUrl} alt={`${item.title} cover`} />
            <MusicTitle>{item.title}</MusicTitle>

            {item.artist && <ArtistName>Artist: {item.artist.name}</ArtistName>}
            {item.album && <AlbumName>Album: {item.album.title}</AlbumName>}
          </CarouselItem>
        </Link>
      ))}
    </CarouselContainer>
  );
};

export default MusicCarousel;
