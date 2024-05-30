import styled from "@emotion/styled";

export const SectionError = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  background-color: #264653;
  color: #fefae0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
