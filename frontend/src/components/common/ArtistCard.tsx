import React from "react";
import { css } from "@emotion/css";
import {
  ArtistAvatar,
  ArtistAvatarContainer,
  ArtistAvatarItem,
  ArtistName,
} from "./styles/AllArtistStyle";

type ArtistItem = {
  id: number;
  artist: string;
  avatarUrl: string;
};

type ArtistCardProps = {
  ArtistItems: ArtistItem[];
};

const ArtistCard: React.FC<ArtistCardProps> = ({ ArtistItems }) => {
  return (
    <ArtistAvatarContainer>
      {ArtistItems.map((item) => (
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <ArtistAvatarItem key={item.id}>
            <ArtistAvatar src={item.avatarUrl} alt={`${item.artist} avatar`} />
          </ArtistAvatarItem>
          <ArtistName>{item.artist}</ArtistName>
        </div>
      ))}
    </ArtistAvatarContainer>
  );
};

export default ArtistCard;
