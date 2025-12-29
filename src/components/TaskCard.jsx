import { useState, useEffect } from "react";

export default function TaskCard({ task, deleteTask, updateProgress, setEditingTask }) {
  const [open, setOpen] = useState(false);
  const [tempProgress, setTempProgress] = useState(task.progress);

  // 🔥 IMPORTANT: sync when parent updates
  useEffect(() => {
    setTempProgress(task.progress);
  }, [task.progress]);

  return (
    <div className="card p-3 shadow-sm mb-3">
      {/* TOP ROW */}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-1">
            {task.title}{" "}
            <span className="badge bg-light text-primary">{task.category}</span>
          </h6>
          <small className="text-muted">
            {task.dueDate} • {task.priority}
          </small>
        </div>

        {/* ICONS */}
        <div className="d-flex gap-3">
          {/* TOGGLE */}
          <i
            className={`bi bi-chevron-${open ? "up" : "down"} cursor-pointer`}
            onClick={() => setOpen(!open)}
          ></i>

          {/* EDIT (future) */}
          <i
            className="bi bi-pencil cursor-pointer text-primary"
            onClick={() => {
              console.log("EDIT CLICKED", task);
              setEditingTask(task);
            }}
          ></i>

          {/* DELETE */}
          <i
            className="bi bi-trash cursor-pointer text-danger"
            onClick={() => deleteTask(task.id)}
          ></i>
        </div>
      </div>

      {/* CURRENT PROGRESS */}
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

      {/* EDIT PROGRESS */}
      {open && (
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
            onClick={() => updateProgress(task.id, tempProgress)}
          >
            Update Progress
          </button>
        </div>
      )}
    </div>
  );
}
