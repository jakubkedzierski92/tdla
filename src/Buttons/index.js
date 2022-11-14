import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="form__hiddenButtons">
      <button
        onClick={toggleHideDone}
        className="button__transition form__newButtons"
      >
        {hideDone ? "Pokaż ukonczone" : "Ukryj ukonczone"}
      </button>
      <button
        onClick={setAllDone}
        className={`button__setDone button__setAllDone`}
        disabled={tasks.every(({ done }) => done)}
      >
        {" "}
        Zaznacz wszystkie
      </button>
    </div>
  );
};

export default Buttons;
