import React from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

type Props = {};

const SubHeader = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={css`
        width: 30rem;
        position: fixed;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 50px;
        padding: 0 20px;
        z-index: 10;
        backdrop-filter: blur(15px);
        color: #e9c46a;
        cursor: pointer;
        @media (max-width: 1024px) {
          width: 22rem;
          bottom: 1rem;
        }
      `}
    >
      <h3
        onClick={() => {
          navigate("/");
        }}
        className={css`
          color: #e9c46a;
          text-decoration: none;
          &:hover {
            color: white;
          }
        `}
      >
        Home
      </h3>
      <h3
        onClick={() => {
          navigate("/song");
        }}
        className={css`
          color: #e9c46a;
          text-decoration: none;
          &:hover {
            color: white;
          }
        `}
      >
        All Music
      </h3>
      <h3
        onClick={() => {
          navigate("/categories");
        }}
        className={css`
          color: #e9c46a;
          text-decoration: none;
          &:hover {
            color: white;
          }
        `}
      >
        Category
      </h3>
      <h3
        onClick={() => {
          navigate("/song/add");
        }}
        className={css`
          color: #e9c46a;
          text-decoration: none;
          &:hover {
            color: white;
          }
        `}
      >
        Add
      </h3>
    </div>
  );
};

export default SubHeader;
