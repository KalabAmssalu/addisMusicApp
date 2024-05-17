import React from "react";
import { css } from "@emotion/css";
import { AdissLogo } from "../../assets/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={css`
        height: 10rem;
        width: 100%;
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 1rem;
        background-color: #2a9d8f;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 4rem;
        color: white;
      `}
    >
      <div
        className={css`
          text-align: center;
        `}
      >
        <img
          src={AdissLogo}
          alt="logo"
          className={css`
            height: 4rem;
            width: 4rem;
          `}
        />
        <h1>Addis Music</h1>
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <ul>
          <li>
            <a
              href="https://addissoftware.com/"
              className={css`
                text-decoration: none;
                font-size: large;
                color: white;
              `}
            >
              AdissSoftware.com
            </a>
          </li>
          <li>
            <a
              href="https://kalabAmssalu.netlify.app"
              className={css`
                text-decoration: none;
                font-size: large;
                color: white;
              `}
            >
              Developed by Kalab Amssalu
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
