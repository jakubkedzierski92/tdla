import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { fetchExamples, selectLoadingStatus } from "../../tasksSlice";


const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);

  return (
      <Button disabled={loadingStatus} onClick={() => dispatch(fetchExamples())}>
          {
              loadingStatus === true ? "Pobieram..." : "Dodaj przykładowe zadania"
          }
      </Button>
  );
};

export default ExampleTasksButton;
