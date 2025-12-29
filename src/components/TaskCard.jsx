export default function TaskCard({ task }) {
  return (
    <div className="card p-3 shadow-sm mb-3">
      <div className="d-flex justify-content-between">
        <div>
          <h6 className="mb-1">
            {task.title}{" "}
            <span className="badge badge-category">{task.category}</span>
          </h6>
          <small className="text-muted">
            {task.dueDate} • {task.priority}
          </small>
        </div>

        <div className="d-flex gap-2">
          <i className="bi bi-pencil"></i>
          <i className="bi bi-trash"></i>
        </div>
      </div>

      <div className="mt-2">
        <small>Progress</small>
        <div className="progress">
          <div className="progress-bar" style={{ width: "55%" }}>
            55%
          </div>
        </div>
      </div>
    </div>
  );
}
