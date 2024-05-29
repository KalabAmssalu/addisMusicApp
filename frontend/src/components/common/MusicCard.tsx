import React from "react";
import {
  ArtistName,
  MusicCardItem,
  MusicCover,
  MusicTitle,
} from "./styles/MusicCardStyles";

type MusicItem = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
};

type MusicCardProps = {
  musicItems: MusicItem[];
};

const MusicCard: React.FC<MusicCardProps> = ({ musicItems }) => {
  return (
    <>
      {musicItems.map((item) => (
        <MusicCardItem key={item.id}>
          <MusicCover src={item.coverUrl} alt={`${item.title} cover`} />
          <MusicTitle>{item.title}</MusicTitle>
          <ArtistName>{item.artist}</ArtistName>
        </MusicCardItem>
      ))}
    </>
  );
};

export default MusicCard;
