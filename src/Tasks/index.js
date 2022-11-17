import "./style.css";
import { List, ListItem, Content, Button } from "./styled"

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <List>
    {tasks.map((task) => (
      <ListItem
        key={task.id}
        hide={task.done && hideDone} 
      >
        <Button
          done
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
        {task.content}
        </Content>
      
        <Button
          onClick={() => removeTask(task.id)}
          remove
        >
          🗑
        </Button>
      </ListItem>
    ))}
  </List>
);

export default Tasks;
