import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useEffect, useState } from "react";
import {BodyDiv, Wrapper} from "./styled.js"
 
function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || []));

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
