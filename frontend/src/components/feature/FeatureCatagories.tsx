import { Disc3, Music, UsersRound } from "lucide-react";
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
    background-color: transparent;
    color: #fdf2e6;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    min-width: 100px;
    height: 4rem;
    gap: 0rem;
  }
`;

type Props = {};

const FeatureCatagories: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <FeatureItem
        onClick={() => {
          navigate("/song");
        }}
      >
        <Music size={36} />
        All music
      </FeatureItem>
      <FeatureItem
        onClick={() => {
          navigate("/song/album");
        }}
      >
        <Disc3 size={36} />
        All Albums
      </FeatureItem>
      <FeatureItem
        onClick={() => {
          navigate("/song/artist");
        }}
      >
        <UsersRound size={36} />
        All Artists
      </FeatureItem>
    </Container>
  );
};

export default FeatureCatagories;
