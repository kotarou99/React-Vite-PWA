const TaskItem = ({ task, deleteTask }) => {
    return (
      <li>
        <span>{task.name}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    );
  };
  
  export default TaskItem;
  