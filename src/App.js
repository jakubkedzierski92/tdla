import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([]);

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
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, 
    {
      content: newTaskContent,
      done: false,
      id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id +1,
    }
    ])
  }

  return (
    <div>
      <Container>
        <main className="container">
          <h1>Lista zadań</h1>
          <Section title="Dodaj zadanie" body={<Form addNewTask={addNewTask} />} />

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
    </div>
  );
}

export default App;
