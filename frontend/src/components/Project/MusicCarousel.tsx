// MusicCarousel.tsx
import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  MusicCover,
  MusicTitle,
  ArtistName,
} from "../common/styles/CarouselStyles";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

type MusicItem = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
};

type MusicCarouselProps = {
  musicItems: MusicItem[];
};

const MusicCarousel: React.FC<MusicCarouselProps> = ({ musicItems }) => {
  return (
    <CarouselContainer>
      {musicItems.map((item) => (
        <Link
          to={`/song/${item.id}`}
          key={item.id}
          className={css`
            text-decoration: none;
          `}
        >
          <CarouselItem key={item.id}>
            <MusicCover src={item.coverUrl} alt={`${item.title} cover`} />
            <MusicTitle>{item.title}</MusicTitle>
            <ArtistName>{item.artist}</ArtistName>
          </CarouselItem>
        </Link>
      ))}
    </CarouselContainer>
  );
};

export default MusicCarousel;
