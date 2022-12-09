import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../common/Section";
import { StyledContainer } from "../styled.js";
import { useState } from "react";
import { useTasks } from "../useTasks.js";
// import { useSelector } from "react-redux"
// import { selectTasks } from "./tasksSlice";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  // const { tasks } = useSelector(selectTasks)

  const { tasks, toggleTaskDone, removeTask, addNewTask, setAllDone } =
    useTasks();

  return (
    
        <StyledContainer>
          <main className="container">
            <h1>Lista zadań</h1>
            <Section
              title="Dodaj zadanie"
              body={<Form addNewTask={addNewTask} />}
            />

            <Section
              title={"Zadania do zrobienia"}
              body={
                <TasksList
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
        </StyledContainer>
    
  );
}

export default Tasks;