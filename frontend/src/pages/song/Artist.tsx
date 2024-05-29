import React, { useRef } from "react";
import { css } from "@emotion/css";
import { ChevronUp } from "lucide-react";
import AllArtist from "../../components/Project/AllArtist";

type Props = {};

const Artist = (props: Props) => {
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
        </div>

        <AllArtist />
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

export default Artist;
