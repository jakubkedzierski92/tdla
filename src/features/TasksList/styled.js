import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: auto;
  padding: 10px;

  @media (max-width: 767px) {
    padding: 10px;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid hsl(0, 0%, 90%);
  column-gap: 10px;
  word-break: break-all;

  @media (max-width: 767px) {
    margin: 0px;
    width: 100%;
    padding: 5px;
    align-items: flex-start;
    word-break: break-all;
  }
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;
export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: 1px solid rgb(0, 0, 0);
  background-color: teal;
  color: white;
  width: 25px;
  height: 25px;
  padding: 0;
  cursor: grab;

  ${({ done }) =>
    done &&
    css`
      background-color: teal;
    `}
  ${({ remove }) =>
    remove &&
    css`
      border: none;
      background-color: transparent;
    `}
`;
