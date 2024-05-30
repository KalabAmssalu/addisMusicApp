import React, { useEffect } from "react";
import styled from "@emotion/styled";
import RecentMusic from "../../components/Project/RecentMusic";
import { Button } from "../../components/common/Button";
import { css } from "@emotion/css";
import { Loader, ShieldX, Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAllMusicQuery,
  useGetMusicByIdQuery,
} from "../../state/slices/songApiSlice";
import { SectionError } from "../../components/common/SectionError";
import FormatDate from "../../service/FormatDate";
import DataFetchStatus from "../../components/common/DataFetchStatus";

const Container = styled.div`
  background-color: #264653;
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
  padding: 1rem 8rem;
  gap: 3rem;
  @media (max-width: 1024px) {
    height: fit-content;
    flex-direction: column;
  }
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
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: Music, isLoading, isError } = useGetMusicByIdQuery(id);

  const { data: AllMusic, isLoading: loading } = useGetAllMusicQuery(undefined);

  if (isLoading) {
    return (
      <SectionError>
        <Loader size={80} color="yellow" />
        <div>Loading ...</div>
      </SectionError>
    );
  }

  if (isError) {
    return (
      <SectionError>
        <ShieldX size={80} color="red" />
        <div>Error fetching music details</div>
      </SectionError>
    );
  }

  if (!Music) {
    return (
      <SectionError>
        <ShieldX size={80} color="red" />
        <div>No music found</div>
      </SectionError>
    );
  }

  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <Container>
      <Main>
        <CoverContainer>
          <CoverImage src={Music.coverUrl} alt="Music Cover" />
        </CoverContainer>

        <DetailTable>
          <tbody>
            <tr>
              <th>Title</th>
              <td>{Music.title}</td>
            </tr>
            <tr>
              <th>Artist</th>
              <td>
                <div
                  className={css`
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    background-color: #2a9d8f;
                    border-radius: 15px;
                    cursor: pointer;
                    padding: 2px;
                    &:hover {
                      background-color: transparent;
                      border: 2px solid white;
                    }
                  `}
                  onClick={() => navigate(`/song/artist/${Music.artist._id}`)}
                >
                  <img
                    src={Music.artist.artistUrl}
                    alt="artist profile"
                    className={css`
                      width: 50px;
                      height: 50px;
                      border-radius: 30px;
                    `}
                  />
                  {Music.artist.name}
                </div>
              </td>
            </tr>
            <tr>
              <th>Album</th>
              <td
                className={css`
                  cursor: pointer;
                  &:hover {
                    background-color: #2a9d8f;
                  }
                `}
                onClick={() => navigate(`/song/album/${Music.album._id}`)}
              >
                {Music.album.title}
              </td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>{Music.genre}</td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>{FormatDate(Music.releaseDate)}</td>
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
          onClick={handleDelete}
        >
          Delete This Music <Trash2 />
        </Button>
      </div>
      {loading ? (
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          `}
        >
          <Loader size={80} color="yellow" />
          <div>Loading ...</div>
        </div>
      ) : (
        <RecentMusic musicItems={AllMusic} />
      )}
    </Container>
  );
};

export default SongDetail;
