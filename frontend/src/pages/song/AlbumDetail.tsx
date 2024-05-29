import React from "react";
import styled from "@emotion/styled";
import { Button } from "../../components/common/Button";
import { Trash2 } from "lucide-react";
import { css } from "@emotion/css";

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
    cursor: pointer;
  }

  tr:nth-of-type(odd) {
    background-image: linear-gradient(to right, #c33727, #e9c46a);
  }

  tr:nth-of-type(even) {
    background-color: transparent;
  }
`;

type Props = {};

const AlbumDetail: React.FC<Props> = () => {
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
              <th>Track 1</th>
              <td>Sample Title</td>
            </tr>
            <tr>
              <th>Track 2</th>
              <td>Sample Artist</td>
            </tr>
            <tr>
              <th>Track 3</th>
              <td>Sample Album</td>
            </tr>
            <tr>
              <th>Track 4</th>
              <td>Sample Genre</td>
            </tr>
            <tr>
              <th>Track 5</th>
              <td>Sample Release Date</td>
            </tr>
            <tr>
              <th>Track 6</th>
              <td>Sample Album</td>
            </tr>
            <tr>
              <th>Track 7</th>
              <td>Sample Genre</td>
            </tr>
            <tr>
              <th>Track 8</th>
              <td>Sample Release Date</td>
            </tr>
            <tr>
              <th>Track 9</th>
              <td>Sample Release Date</td>
            </tr>
            <tr>
              <th>Track 10</th>
              <td>Sample Album</td>
            </tr>
            <tr>
              <th>Track 11</th>
              <td>Sample Genre</td>
            </tr>
            <tr>
              <th>Track 12</th>
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
          Delete This Album <Trash2 />
        </Button>
      </div>
    </Container>
  );
};

export default AlbumDetail;
