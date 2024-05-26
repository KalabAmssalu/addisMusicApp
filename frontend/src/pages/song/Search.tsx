import React from "react";
import { Section } from "../../components/common/Section";
import { css } from "@emotion/css";
import SearchInput from "../../components/common/SearchInput";
import Feature from "../../components/feature/Feature";

type Props = {};

const Search = (props: Props) => {
  return (
    <Section>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 80%;
          margin: 2rem;

          @media (max-width: 768px) {
            margin: 0rem;
            padding: 10px;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          `}
        >
          <h1
            className={css`
              font-size: xx-large;
            `}
          >
            Addis <span style={{ backgroundColor: "#c33727" }}>Music </span>
          </h1>
          <br />

          <h3
            className={css`
              margin: 2rem 1rem;
              font-family: Arial, Helvetica, sans-serif;
            `}
          >
            Search music using name of the music, artists, albums, genres, songs
            per genre,
          </h3>

          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              @media (max-width: 768px) {
                flex-direction: column;
                gap: 1rem;
              }
            `}
          >
            <label htmlFor="search"> Search: </label>
            <SearchInput />
          </div>
        </div>
        <div
          className={css`
            width: 100%;
            @media (max-width: 768px) {
              overflow: auto;
            }
          `}
        >
          <Feature />
        </div>
      </div>
    </Section>
  );
};

export default Search;
