
import { HiddenButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone} from "../tasksSlice";

const Buttons = () => {

  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch()
  if (tasks.length === 0) {
    return null;
  }

  return (
    <HiddenButtons>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukonczone"}
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