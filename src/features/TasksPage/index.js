import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { StyledContainer } from "../../styled.js";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <StyledContainer>
      <main className="container">
        <h1>Lista zadań</h1>
        <Section 
          title="Dodaj zadanie" 
          body={<Form />} 
          extraHeaderContent={<ExampleTasksButton />}
          />

        <Section
          title={"Wyszukiwarka"}
          body ={<Search />}
          />

        <Section
          title={"Zadania do zrobienia"}
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </main>
    </StyledContainer>
  );
}

export default TasksPage;
