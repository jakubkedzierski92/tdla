
import { HiddenButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <HiddenButtons>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukonczone"}
      </Button>
      <Button
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        {" "}
        Zaznacz wszystkie
      </Button>
    </HiddenButtons>
  );
};

export default Buttons;