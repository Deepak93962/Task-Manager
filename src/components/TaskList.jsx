import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask, updateProgress, setEditingTask }) {
  
  return (
    <div>
      <input className="form-control mb-3" placeholder="Search tasks..." />

      {tasks.length === 0 && <p className="text-muted">No tasks yet</p>}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateProgress={updateProgress}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}
