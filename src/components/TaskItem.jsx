export default function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <span
        onClick={() => toggleTask(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}
