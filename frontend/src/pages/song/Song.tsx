import React from "react";
import { Section } from "../../components/common/Section";
import { MainContainer, PageContainer } from "./AllMusicStyle";
import { css } from "@emotion/css";
import FilterContainer from "./FilterContainer";
import RecentMusic from "../../components/Project/RecentMusic";
import AllMusic from "../../components/Project/AllMusic";
import PopularArtist from "../../components/Project/PopularArtist";

type Props = {};

const song = (props: Props) => {
  return (
    <div
      className={css`
        background-color: #264653;
        height: fit-content;
        padding-bottom: 6rem;
        color: white;
      `}
    >
      <PageContainer>
        <FilterContainer />
        <MainContainer>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
            <h1
              className={css`
                font-size: xx-large;
              `}
            >
              Addis <span style={{ backgroundColor: "#c33727" }}>Music </span>
            </h1>
          </div>
          <RecentMusic />
          <AllMusic />
        </MainContainer>
      </PageContainer>
      <PopularArtist />
    </div>
  );
};

export default song;
