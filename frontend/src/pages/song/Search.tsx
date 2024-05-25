import React from "react";
import { Section } from "../../components/common/Section";
import { css } from "@emotion/css";
import SearchInput from "../../components/common/SearchInput";
import Project from "../../components/Project/Project";

type Props = {};

const Search = (props: Props) => {
  return (
    <>
      <Section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            height: "80%",
            margin: "2rem",
          }}
        >
          <h1 className="big-text">
            Addis <span style={{ backgroundColor: "#c33727" }}>Music </span>
          </h1>
          <br />
          <br />
          <br />

          <h3
            className={css`
              margin: 2rem 1rem;
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
            `}
          >
            <label htmlFor="search"> Search: </label>
            <SearchInput />
          </div>
        </div>
      </Section>
      <Section>
        <Project />
      </Section>
    </>
  );
};

export default Search;
