
import { HiddenButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, fetchExamples} from "../../tasksSlice";

const Buttons = () => {

  const { tasks, hideDone } = useSelector(selectTasksState)
  const dispatch = useDispatch()
  if (tasks.length === 0) {
    return (
    <Button onClick={() => dispatch(fetchExamples())}>
      Dodaj przykładowe zadania
    </Button>)
  }

  return (
    <HiddenButtons>
      <Button onClick={() => dispatch(fetchExamples())}>
      Dodaj przykładowe zadania
    </Button>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukończone"}
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        {" "}
        Zaznacz wszystkie
      </Button>
    </HiddenButtons>
  );
};

export default Buttons;