import Section from "./common/Section";
import { StyledContainer } from "./styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "./features/tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <StyledContainer>
      <main>
        <h1>Szczegóły zadania</h1>
        <Section
          title={task ? task.content : "nie znaleziono zadania :("}
          body={
            <>
              <strong>Ukończono:</strong>
              {task && task.done ? "tak" : "nie"}
            </>
          }
        />
      </main>
    </StyledContainer>
  );
}

export default TaskPage;
