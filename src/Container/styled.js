import styled from "styled-components";

export const MainContainer = styled.main`
  font-family: "Lato", sans-serif;
  box-sizing: border-box;

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  max-width: 700px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: rgba(241, 239, 239, 0.909);

  @media (max-width: 767px) {
    max-width: 90%;
  }
`;
