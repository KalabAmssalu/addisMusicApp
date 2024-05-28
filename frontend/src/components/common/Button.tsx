import styled, { CSSProperties } from "styled-components";

interface ButtonProps {
  variant?: "outline" | "filled";
  customStyles?: CSSProperties;
}

export const Button = styled.button<ButtonProps>`
  padding: 8px 15px;
  background-color: ${(props) =>
    props.variant === "outline" ? "#264653" : "#2a9d8f"};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #2a9d8f" : "0px"};
  &:hover {
    color: gray;
    background-color: #e9c46a;
  }
  transition: all 0.5s ease-out;

  ${(props) => props.customStyles && { ...props.customStyles }};
`;

export const SubmitButton = styled(Button).attrs({
  type: "submit",
})`
  box-shadow: 0 2px #999;
  background-image: linear-gradient(to right, #c33727, #e9c46a);
  &:active {
    background-color: #e9c46a;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:hover {
    background-image: linear-gradient(to top, #c33727, #e9c46a);
    color: black;
  }
`;
