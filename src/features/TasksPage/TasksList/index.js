import { List, ListItem, Content, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch()
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} hide={task.done && hideDone}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
            </Content>

          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;
