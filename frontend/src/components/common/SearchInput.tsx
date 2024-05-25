import React from "react";
import { css } from "@emotion/css";
import { Search } from "lucide-react";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <div
      className={css`
        height: 40px;
        width: 24rem;
        border-radius: 20px;
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        background-color: transparent;
        border-color: white;
      `}
    >
      <input
        type="text"
        name="search"
        className={css`
          height: 36px;
          width: 20rem;
          background-color: transparent;
          color: white;
          border: 0px;
          font-size: larger;
          padding-left: 1rem;
          &:focus {
            outline: none;
          }
        `}
      />
      {
        <Search
          className={css`
            height: 25px;
            width: 25px;
            margin-left: 1rem;
            color: #e9c46a;
          `}
        />
      }
    </div>
  );
};

export default SearchInput;
