import React from "react";
import styled from "@emotion/styled";
import RecentMusic from "../../components/Project/RecentMusic";
import { Button } from "../../components/common/Button";
import { css } from "@emotion/css";
import { Trash2 } from "lucide-react";

const Container = styled.div`
  background-color: #264653;
  height: fit-content;
  padding-bottom: 6rem;
  padding-top: 6rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 8rem;
  gap: 3rem;
`;

const CoverContainer = styled.div`
  background-color: transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding: 3rem;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const DetailTable = styled.table`
  background-color: transparent;
  width: 600px;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.2rem;

  th,
  td {
    padding: 5px;
  }

  tr:nth-of-type(odd) {
    background-image: linear-gradient(to right, #c33727, #e9c46a);
  }

  tr:nth-of-type(even) {
    background-color: transparent;
  }
`;

type Props = {};

const SongDetail: React.FC<Props> = () => {
  return (
    <Container>
      <Main>
        <CoverContainer>
          <CoverImage
            src="https://picsum.photos/150/150?music?9"
            alt="newone"
          />
        </CoverContainer>

        <DetailTable>
          <tbody>
            <tr>
              <th>Title</th>
              <td>Sample Title</td>
            </tr>
            <tr>
              <th>Artist</th>
              <td>Sample Artist</td>
            </tr>
            <tr>
              <th>Album</th>
              <td>Sample Album</td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>Sample Genre</td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>Sample Release Date</td>
            </tr>
          </tbody>
        </DetailTable>
      </Main>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1rem;
        `}
      >
        <Button
          variant="filled"
          customStyles={{
            fontSize: "18px",
            padding: "5px 20px",
            borderRadius: "10px",
            borderColor: "blue",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          Delete This Music <Trash2 />
        </Button>
      </div>
      <RecentMusic />
    </Container>
  );
};

export default SongDetail;
