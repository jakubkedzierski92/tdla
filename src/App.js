import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useState } from "react";
import { BodyDiv, Wrapper } from "./styled.js";
import { useTasks } from "./useTasks.js";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks, toggleTaskDone, removeTask, addNewTask, setAllDone } =
    useTasks();

  return (
    <Wrapper>
      <BodyDiv>
        <Container>
          <main className="container">
            <h1>Lista zadań</h1>
            <Section
              title="Dodaj zadanie"
              body={<Form addNewTask={addNewTask} />}
            />

            <Section
              title={"Zadania do zrobienia"}
              body={
                <Tasks
                  tasks={tasks}
                  hideDone={hideDone}
                  removeTask={removeTask}
                  toggleTaskDone={toggleTaskDone}
                />
              }
              extraHeaderContent={
                <Buttons
                  tasks={tasks}
                  hideDone={hideDone}
                  toggleHideDone={toggleHideDone}
                  setAllDone={setAllDone}
                />
              }
            />
          </main>
        </Container>
      </BodyDiv>
    </Wrapper>
  );
}

export default App;
