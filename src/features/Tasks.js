import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../common/Section";
import { StyledContainer } from "../styled.js";

function Tasks() {
  return (
    <StyledContainer>
      <main className="container">
        <h1>Lista zadań</h1>
        <Section title="Dodaj zadanie" body={<Form />} />

        <Section
          title={"Zadania do zrobienia"}
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </main>
    </StyledContainer>
  );
}

export default Tasks;
