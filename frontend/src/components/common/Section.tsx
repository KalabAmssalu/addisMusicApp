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
  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    gap: 0rem;
    flex: 1;
  }
`;

export const MiniSection = styled(Section)`
  height: 20rem;
`;
