import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  background-color: #264653;
  color: #fefae0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: start;
    padding-top: 2rem;
    height: fit-content;
    border: 0px;
  }
`;

export const MiniSection = styled(Section)`
  height: 20rem;
`;
