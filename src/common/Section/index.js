import {
  StyledListContainer,
  SecondaryHeader,
  TasksList,
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <StyledListContainer>
      <SecondaryHeader>{title}</SecondaryHeader>
      {extraHeaderContent}
    </StyledListContainer>
    <TasksList>
      {body}
    </TasksList>
  </section>
);

export default Section;