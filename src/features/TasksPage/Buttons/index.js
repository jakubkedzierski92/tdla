import { HiddenButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  fetchExamples,
  selectHideDone,
  selectAllTaskDone,
  selectAreTasksEmpty,
} from "../../tasksSlice";

const Buttons = () => {
  const allTaskDone = useSelector(selectAllTaskDone);
  const hideDone = useSelector(selectHideDone);
  const areAllEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();
  if (areAllEmpty) {
    return (
      <Button onClick={() => dispatch(fetchExamples())}>
        Dodaj przykładowe zadania
      </Button>
    );
  }

  return (
    <HiddenButtons>
      <Button onClick={() => dispatch(fetchExamples())}>
        Dodaj przykładowe zadania
      </Button>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukończone"}
      </Button>
      <Button onClick={() => dispatch(setAllDone())} disabled={allTaskDone}>
        {" "}
        Zaznacz wszystkie
      </Button>
    </HiddenButtons>
  );
};

export default Buttons;
