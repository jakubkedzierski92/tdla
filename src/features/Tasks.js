import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../common/Section";
import { StyledContainer } from "../styled.js";
import { useTasks } from "../useTasks.js";
import {useDispatch} from 'react-redux'
// import { useSelector } from "react-redux";
// import { selectTasks } from "./tasksSlice";

function Tasks() {
  // const { tasks } = useSelector(selectTasks);

  const { toggleTaskDone, removeTask, addNewTask, setAllDone } = useTasks();
  const dispatch = useDispatch()
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
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={<Buttons setAllDone={setAllDone} />}
        />
      </main>
    </StyledContainer>
  );
}

export default Tasks;
