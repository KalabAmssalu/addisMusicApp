import React from "react";
import styled, { CSSProperties } from "styled-components";
import { css } from "@emotion/css";

type Props = {
  inputProps: InputProps;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface InputProps {
  name: string;
  type: string;
  required: boolean;
  customStyles?: CSSProperties;
}

const StyledInput = styled.input<{ customStyles?: CSSProperties }>`
  ${(props) => props.customStyles && { ...props.customStyles }}
`;
const Input: React.FC<Props> = ({ inputProps, value, onChange }) => {
  const { name, type, required, customStyles } = inputProps;

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        @media (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          padding-left: 1rem;
        }
      `}
    >
      <label htmlFor={name}>
        {name} :{" "}
        {required && (
          <span
            className={css`
              color: red;
              text-align: center;
            `}
          >
            *
          </span>
        )}
      </label>

      <StyledInput
        type={type}
        name={name}
        customStyles={customStyles}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
