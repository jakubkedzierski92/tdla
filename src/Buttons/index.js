
import { HiddenButtons, HideDoneButton, SetDoneButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <HiddenButtons>
      <HideDoneButton onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukonczone"}
      </HideDoneButton>
      <SetDoneButton
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        {" "}
        Zaznacz wszystkie
      </SetDoneButton>
    </HiddenButtons>
  );
};

export default Buttons;
