import { AudioLines, Disc3, Music, UsersRound } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #264653;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex: 2;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 10px;
  margin: 10px;
  background-color: #fdf2e6;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  min-width: 200px;

  &:hover {
    background-image: linear-gradient(to right, #c33727, #e9c46a);
    color: white;
    border: 0px;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    min-width: 100px;
    height: 4rem;
    gap: 0rem;
  }
`;

type Props = {};

const Project: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <FeatureItem>
        <Music size={36} />
        2000+ music
      </FeatureItem>
      <FeatureItem>
        <AudioLines size={36} />
        15+ Genre
      </FeatureItem>
      <FeatureItem>
        <UsersRound size={36} />
        50+ Artist
      </FeatureItem>
      <FeatureItem>
        <Disc3 size={36} />
        50+ Album
      </FeatureItem>
    </Container>
  );
};

export default Project;
