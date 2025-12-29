import { useState, useEffect } from "react";

export default function TaskCard({
  task,
  deleteTask,
  updateProgress,
  toggleCompleted,
  setEditingTask,
}) {
  const [open, setOpen] = useState(false);
  const [tempProgress, setTempProgress] = useState(task.progress ?? 0);

  // keep slider in sync with parent updates
  useEffect(() => {
    setTempProgress(task.progress ?? 0);
    if (task.completed) setOpen(false); // hide editor if completed
  }, [task.progress, task.completed]);

  const handleUpdateProgress = () => {
    updateProgress(task.id, tempProgress);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(task.id);
  };

  return (
    <div
      className={`card p-3 shadow-sm mb-3 ${
        task.completed ? "opacity-75" : ""
      }`}
    >
      {/* TOP ROW */}
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex gap-2">
          {/* CHECKBOX */}
          <input
            type="checkbox"
            className="form-check-input mt-1"
            checked={!!task.completed}
            onChange={handleToggleCompleted}
          />

          <div>
            <h6
              className={`mb-1 ${
                task.completed ? "text-decoration-line-through" : ""
              }`}
            >
              {task.title}{" "}
              <span className="badge bg-light text-primary">
                {task.category}
              </span>
            </h6>

            <small className="text-muted">{task.priority}</small>
          </div>
        </div>

        {/* ICONS */}
        <div className="d-flex gap-3 align-items-center">
          {/* TOGGLE EDIT PROGRESS */}
          {!task.completed && (
            <i
              className={`bi bi-chevron-${open ? "up" : "down"} cursor-pointer`}
              onClick={() => setOpen((v) => !v)}
            />
          )}

          {/* EDIT TASK */}
          <i
            className="bi bi-pencil cursor-pointer text-primary"
            onClick={() => setEditingTask(task)}
          />

          {/* DELETE */}
          <i
            className="bi bi-trash cursor-pointer text-danger"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      {task.description && (
        <p
          className={`mt-2 mb-1 ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {task.description}
        </p>
      )}

      {/* PROGRESS BAR */}
      <div className="mt-2">
        <small>Progress</small>
        <div className="progress">
          <div
            className="progress-bar bg-primary"
            style={{ width: `${task.progress}%` }}
          >
            {task.progress}%
          </div>
        </div>
      </div>

      {/* EDIT PROGRESS (COLLAPSIBLE) */}
      {open && !task.completed && (
        <div className="mt-3 border-top pt-3">
          <div className="d-flex justify-content-between">
            <small>Edit Progress</small>
            <small>{tempProgress}%</small>
          </div>

          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={tempProgress}
            onChange={(e) => setTempProgress(Number(e.target.value))}
          />

          <button
            className="btn btn-sm btn-primary mt-2"
            onClick={handleUpdateProgress}
          >
            Update Progress
          </button>
        </div>
      )}
    </div>
  );
}
