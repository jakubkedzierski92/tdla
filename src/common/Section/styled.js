import styled from "styled-components";

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ccc;
  max-width: 700px;
  width: 100%;
  padding: 5px;
  margin: 2px 0px;
  margin-bottom: 0px;
  background-color: white;

  @media (max-width: 767px) {
    max-width: 90%;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const SecondaryHeader = styled.header`
  text-align: left;
  margin: 10px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const TasksList = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  max-width: 700px;
  width: 100%;
  padding: 5px;
  min-height: 55px;
  
  @media (max-width: 767px) {
    max-width: 266px;
    width: 90%;
    padding: 0px;
  }
`;