import React, { useRef } from "react";
import { css } from "@emotion/css";
import SearchInput from "../../components/common/SearchInput";
import Feature from "../../components/feature/Feature";
import AllMusic from "../../components/Project/AllMusic";
import { ChevronUp } from "lucide-react";

type Props = {};

const Search = (props: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={topRef}
      className={css`
        background-color: #264653;
        padding: 5rem;
        padding-bottom: 6rem;
        color: white;
        margin-top: 0rem;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 80%;

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
          id="topheader"
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
            <SearchInput widthOf="24rem" />
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
        <AllMusic />
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
            right: 2rem;
            &:hover {
              background-color: #e9c46a;
              color: transparent;
            }
          `}
        >
          <ChevronUp size={48} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Search;
