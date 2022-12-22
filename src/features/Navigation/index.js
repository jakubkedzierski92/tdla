import { StyledNavLink, StyledItem, StyledNavigation } from "./styled";

export const Navigation = () => {
  return (
    <nav>
      <StyledNavigation>
        <StyledItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledItem>
      </StyledNavigation>
    </nav>
  );
};
