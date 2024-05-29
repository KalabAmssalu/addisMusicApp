import React from "react";
import { SideSearchContainer } from "../common/styles/AllMusicStyle";
import { css } from "@emotion/css";
import SearchInput from "../common/SearchInput";
import { Button, SubmitButton } from "../common/Button";

type Props = {};

const genres = [
  "Dance",
  "Jazz",
  "Pop",
  "R&B",
  "Rock",
  "Hip-Hop",
  "Classical",
  "Country",
];

const albums = ["Album1", "Album2", "Album3"];
const artists = ["Artist1", "Artist2", "Artist3"];

const FilterContainer: React.FC<Props> = () => {
  return (
    <SideSearchContainer>
      <h3
        className={css`
          text-align: center;
        `}
      >
        Find Your Interest
      </h3>
      <h4
        className={css`
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
        `}
      >
        Search music using the name of the music, artists, albums, genres, songs
        per genre,
      </h4>
      <div
        className={css`
          display: flex;
          margin: 1rem 0;
          justify-content: center;
          align-items: center;
        `}
      >
        <label htmlFor="search"> Search: </label>
        <SearchInput widthOf="20rem" />
      </div>
      <form>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          `}
        >
          <Button
            variant="outline"
            customStyles={{
              fontSize: "18px",
              padding: "5px 20px",
            }}
          >
            Clear
          </Button>
          <SubmitButton
            variant="filled"
            customStyles={{
              fontSize: "18px",
              padding: "5px 20px",
              borderRadius: "10px",
              borderColor: "blue",
            }}
          >
            Filter
          </SubmitButton>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 2rem;
            @media (max-width: 768px) {
              margin: 1rem;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            `}
          >
            <h3
              className={css`
                text-align: center;
              `}
            >
              Genre
            </h3>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              `}
            >
              {genres.map((genre) => (
                <div
                  key={genre}
                  className={css`
                    display: flex;
                    gap: 10px;
                    align-items: center;
                  `}
                >
                  <input
                    type="checkbox"
                    name={genre}
                    id={genre}
                    className={css`
                      width: 20px;
                      height: 20px;
                    `}
                  />
                  <label
                    htmlFor={genre}
                    className={css`
                      margin-left: 8px;
                    `}
                  >
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            `}
          >
            <h3
              className={css`
                text-align: center;
              `}
            >
              Album
            </h3>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                height: 14rem;
                overflow: auto;
              `}
            >
              {albums.map((album) => (
                <div
                  key={album}
                  className={css`
                    display: flex;
                    gap: 10px;
                    align-items: center;
                  `}
                >
                  <input
                    type="checkbox"
                    name={album}
                    id={album}
                    className={css`
                      width: 20px;
                      height: 20px;
                    `}
                  />
                  <label
                    htmlFor={album}
                    className={css`
                      margin-left: 8px;
                    `}
                  >
                    {album}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.5rem;
          `}
        >
          <div
            className={css`
              display: flex;
              gap: 0.5rem;
              justify-content: center;
              align-items: center;
            `}
          >
            <label htmlFor="Artist">Artist :</label>
            <select
              name="Artist"
              id="Artist"
              className={css`
                width: 10rem;
                height: 2rem;
                border-radius: 10px;
                padding: 0.5rem;
              `}
            >
              {artists.map((artist) => (
                <option key={artist} value={artist}>
                  {artist}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </SideSearchContainer>
  );
};

export default FilterContainer;
