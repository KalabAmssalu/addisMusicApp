import React from "react";
import { avatar, website } from "../../assets/image";
import { css } from "@emotion/css";
import { Section } from "../../components/common/Section";

type Props = {};

const ArtistDetail = (props: Props) => {
  return (
    <Section>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          @media (max-width: 768px) {
            padding-top: 4rem;
            margin-bottom: 10rem;
          }
        `}
      >
        <img
          src="https://picsum.photos/150/150?music?9"
          alt="newone"
          className={css`
            border-radius: 20px;
            height: 200px;
            width: 200px;
          `}
        />
        <h2
          className={css`
            color: #fff200;
            font-style: italic;
          `}
        >
          Artist Name:
        </h2>
        <h1>Kalab Amssalu Bezabeh</h1>
      </div>
    </Section>
  );
};

export default ArtistDetail;
