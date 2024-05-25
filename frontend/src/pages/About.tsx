import React from "react";
import { Section } from "../components/common/Section";
import { avatar, website } from "../assets/image";
import { css } from "@emotion/css";

type Props = {};

const About = (props: Props) => {
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
        `}
      >
        <img
          src={avatar}
          alt="creator avatar"
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
          Developeded by:
        </h2>
        <h1>Kalab Amssalu Bezabeh</h1>
        <a
          href="https://kalabAmssalu.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={css`
            cursor: pointer;
          `}
        >
          <img
            src={website}
            alt="portfolio"
            className={css`
              width: 100px;
              height: 100px;
            `}
          />
        </a>
      </div>
    </Section>
  );
};

export default About;
