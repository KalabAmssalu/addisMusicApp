import {
  AudioLines,
  Disc2,
  Guitar,
  Headphones,
  LayoutGrid,
  Music,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  background-color: #fff;
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

  @media (max-width: 768px) {
    margin: 10px 0;
    min-width: 100px;
    height: 4rem;
    gap: 0rem;
  }
`;

type Props = {};

const Feature: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <FeatureItem
        onClick={() => {
          navigate("/song");
        }}
      >
        <LayoutGrid size={36} />
        All music
      </FeatureItem>
      <FeatureItem>
        <Headphones size={36} />
        Dance
      </FeatureItem>
      <FeatureItem>
        <Disc2 size={36} />
        Jazz
      </FeatureItem>
      <FeatureItem>
        <Music size={36} />
        Pop
      </FeatureItem>
      <FeatureItem>
        <AudioLines size={36} />
        R&B
      </FeatureItem>
      <FeatureItem>
        <Guitar size={36} />
        Rock
      </FeatureItem>
    </Container>
  );
};

export default Feature;
