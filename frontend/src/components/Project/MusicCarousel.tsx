// MusicCarousel.tsx
import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  MusicCover,
  MusicTitle,
  ArtistName,
} from "../common/CarouselStyles";

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
        <CarouselItem key={item.id}>
          <MusicCover src={item.coverUrl} alt={`${item.title} cover`} />
          <MusicTitle>{item.title}</MusicTitle>
          <ArtistName>{item.artist}</ArtistName>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default MusicCarousel;
