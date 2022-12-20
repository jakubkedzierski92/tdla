import { useDispatch } from "react-redux";
import Button from "../Button";
import { fetchExamples } from "../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExamples())}>
      Dodaj przykładowe zadania
    </Button>
  );
};

export default ExampleTasksButton;
