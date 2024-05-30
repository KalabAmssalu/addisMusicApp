import React, { useRef } from "react";
import {
  MainContainer,
  PageContainer,
} from "../../components/common/styles/AllMusicStyle";
import { css } from "@emotion/css";
import FilterContainer from "../../components/Project/FilterContainer";
import RecentMusic from "../../components/Project/RecentMusic";
import AllMusic from "../../components/Project/AllMusic";
import PopularArtist from "../../components/Project/PopularArtist";
import { ChevronUp } from "lucide-react";
import { useGetAllMusicQuery } from "../../state/slices/songApiSlice";

type Props = {};

const Song = (props: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { data: Music, isLoading } = useGetAllMusicQuery(undefined);

  console.log("data imported", Music);
  return (
    <div
      ref={topRef}
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
          <RecentMusic musicItems={Music} />
          <AllMusic />
        </MainContainer>
      </PageContainer>
      <div
        className={css`
          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        <PopularArtist />
      </div>
      <div>
        <button
          onClick={scrollToTop}
          className={css`
            background-color: white;
            color: black;
            width: 45px;
            height: 45px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            &:hover {
              background-color: #e9c46a;
              color: transparent;
            }
            @media (max-width: 768px) {
              bottom: 5rem;
              right: 1rem;
            }
          `}
        >
          <ChevronUp size={48} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Song;
