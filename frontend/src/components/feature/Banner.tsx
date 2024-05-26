import React from "react";
import { banner } from "../../assets/image";
import { Section } from "../common/Section";
import { css } from "@emotion/css";

type Props = {};

const Banner: React.FC<Props> = () => {
  return (
    <Section>
      <div
        className={css`
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 1rem;
          background-image: linear-gradient(to right, #c33727, #e9c46a);
        `}
      >
        <img
          src={banner}
          alt="banner music"
          className={css`
            width: 80%;
            height: 80%;
            position: relative;
            @media (max-width: 1024px) {
              height: 60%;
              width: 90%;
            }
          `}
        />
        <div
          className={css`
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 30%;
            background: linear-gradient(
              to top,
              rgba(181, 15, 15, 0.9),
              transparent
            );
            pointer-events: none;
          `}
        />
      </div>
    </Section>
  );
};

export default Banner;
