import React from "react";
import { css } from "@emotion/css";
import { Search } from "lucide-react";

type Props = {
  widthOf: string;
};

const SearchInput: React.FC<Props> = ({ widthOf }) => {
  const widthofInput = `calc(${widthOf} - 4rem)`;
  return (
    <div
      className={css`
        height: 40px;
        width: ${widthOf};
        border-radius: 20px;
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        background-color: transparent;
        border-color: white;
        @media (max-width: 768px) {
          width: 20rem;
        }
      `}
    >
      <input
        type="text"
        name="search"
        className={css`
          height: 36px;
          width: ${widthofInput};
          background-color: transparent;
          color: white;
          border: 0px;
          font-size: larger;
          padding-left: 1rem;
          &:focus {
            outline: none;
          }
          @media (max-width: 768px) {
            width: calc(20rem - 4rem);
          }
        `}
      />
      <Search
        className={css`
          height: 25px;
          width: 25px;
          margin: 0rem 0.5rem;
          color: #e9c46a;
        `}
      />
    </div>
  );
};

export default SearchInput;
