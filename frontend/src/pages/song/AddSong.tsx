import React from "react";
import styled from "@emotion/styled";
import AddMusic from "../../components/Add/AddMusic";

type Props = {};
const Container = styled.div`
  background-color: #264653;
  height: fit-content;
  padding-bottom: 6rem;
  padding-top: 6rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddSong = (props: Props) => {
  return (
    <Container>
      <AddMusic />
    </Container>
  );
};

export default AddSong;
