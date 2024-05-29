import React from "react";
import styled from "@emotion/styled";
import AddMusic from "../../components/Add/AddMusic";
import { css } from "@emotion/css";
import AddArtist from "../../components/Add/AddArtist";
import AddAlbum from "../../components/Add/AddAlbum";

type Props = {};
const Container = styled.div`
  background-color: #264653;
  height: fit-content;
  padding-bottom: 6rem;
  padding-top: 6rem;
  color: white;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddSong = (props: Props) => {
  return (
    <Container>
      <div
        className={css`
          display: flex;
          gap: 10rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          @media (max-width: 768px) {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
        `}
      >
        <h1>Step 1: Add Artist First</h1>
        <AddArtist />
      </div>
      <div
        className={css`
          display: flex;
          gap: 10rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap-reverse;
          @media (max-width: 768px) {
            gap: 1rem;
            padding: 1rem;
          }
        `}
      >
        <AddAlbum />
        <h1>Step 2: Add Album</h1>
      </div>
      <div
        className={css`
          display: flex;
          gap: 10rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          @media (max-width: 768px) {
            flex-direction: column;

            gap: 1rem;
          }
        `}
      >
        <h1>Step 3: Add Music</h1>
        <AddMusic />
      </div>
    </Container>
  );
};

export default AddSong;
