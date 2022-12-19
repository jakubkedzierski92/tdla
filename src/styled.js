import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: rgba(241, 239, 239, 0.909);
  
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const StyledNavigation = styled.ul`
background-color: teal;
width: 100%;
padding: 10px;
margin-top: 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
`

export const StyledItem = styled.li`
margin-right:10px;
`
