import React from "react";
import { MiniSection } from "../common/Section";
import { css } from "@emotion/css";
import { AdissLogo, HomeImg, Software } from "../../assets/image";

type Props = {};

const Project = (props: Props) => {
  return (
    <MiniSection>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: auto;
          gap: 2rem;
        `}
      >
        <img
          src={Software}
          alt=""
          className={css`
            width: 20rem;
            height: 20rem;
            border-radius: 50px;
          `}
        />
        <img
          src={Software}
          alt=""
          className={css`
            width: 20rem;
            height: 20rem;
            border-radius: 50px;
          `}
        />
        <img
          src={Software}
          alt=""
          className={css`
            width: 20rem;
            height: 20rem;
            border-radius: 50px;
          `}
        />
        <img
          src={Software}
          alt=""
          className={css`
            width: 20rem;
            height: 20rem;
            border-radius: 50px;
          `}
        />
      </div>
    </MiniSection>
  );
};

export default Project;
