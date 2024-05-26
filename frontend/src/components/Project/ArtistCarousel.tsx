import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  ArtistAvatar,
  ArtistName,
} from "../common/AvatarCarouselStyles";
import { css } from "@emotion/css";
type MusicItem = {
  id: number;
  artist: string;
  avatarUrl: string;
};

type ArtistCarouselProps = {
  musicItems: MusicItem[];
};

const ArtistCarousel: React.FC<ArtistCarouselProps> = ({ musicItems }) => {
  return (
    <CarouselContainer>
      {musicItems.map((item) => (
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <CarouselItem key={item.id}>
            <ArtistAvatar src={item.avatarUrl} alt={`${item.artist} avatar`} />
          </CarouselItem>
          <ArtistName>{item.artist}</ArtistName>
        </div>
      ))}
    </CarouselContainer>
  );
};

export default ArtistCarousel;
