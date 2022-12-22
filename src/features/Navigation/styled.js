import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.ul`
  background-color: teal;
  width: 100%;
  padding: 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledItem = styled.li`
  margin-right: 20px;
  list-style-type: none;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: white;
    font-weight: bold;
  }
`;
