import "./style.css";

const Tasks = (props) => (
  <ul className="list__unordered">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item  ${
          task.done && props.hideDone ? "list__item--hide" : ""
        }`}
      >
        <button 
          onClick={() => props.toggleTaskDone(task.id)}
          className="list__button list__button--done ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "list__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => props.removeTask(task.id)}
          className=" list__button list__button--remove "
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
