import React from "react";
import styled, { CSSProperties } from "styled-components";
import { css } from "@emotion/css";

type Option = {
  value: string | number;
  label: string;
};

type Props = {
  selectionProps: SelectionProps;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

interface SelectionProps {
  name: string;
  required: boolean;
  customStyles?: CSSProperties;
}

const StyledSelection = styled.select<{ customStyles?: CSSProperties }>`
  ${(props) => props.customStyles && { ...props.customStyles }}
`;

const Selection: React.FC<Props> = ({
  selectionProps,
  value,
  onChange,
  options,
}) => {
  const { name, required, customStyles } = selectionProps;

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

      <StyledSelection
        name={name}
        customStyles={customStyles}
        required={required}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelection>
    </div>
  );
};

export default Selection;
