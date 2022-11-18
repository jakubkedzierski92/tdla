
import {
  StyledList,
  SecondaryHeader,
  TasksList,
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <StyledList>
      <SecondaryHeader>{title}</SecondaryHeader>
      {extraHeaderContent}
    </StyledList>
    <TasksList>
      {body}
    </TasksList>
  </section>
);

export default Section;
