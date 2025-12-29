import { useState } from "react";

export default function CreateTaskModal({ addTask }) {
  const [progress, setProgress] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const f = e.target;

    addTask({
      id: Date.now(),
      title: f.title.value,
      description: f.description.value,
      dueDate: f.date.value,
      category: f.category.value,
      priority: f.priority.value,
      progress: Number(progress), // ✅ REAL PROGRESS
      completed: progress === 100,
    });

    setProgress(0);
    f.reset();
  };

  return (
    <div className="modal fade" id="taskModal">
      <div className="modal-dialog modal-lg">
        <form className="modal-content p-4" onSubmit={submit}>
          <div className="modal-header">
            <h5>Create New Task</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <label>Task Title *</label>
            <input name="title" className="form-control mb-3" required />

            <label>Description</label>
            <textarea name="description" className="form-control mb-3" />

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Due Date</label>
                <input name="date" type="date" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>Category</label>
                <select name="category" className="form-select">
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Health</option>
                </select>
              </div>
              <div className="col-md-4">
                <label>Priority</label>
                <select name="priority" className="form-select">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            {/* ✅ INITIAL PROGRESS */}
            <label className="d-flex justify-content-between">
              Initial Progress
              <span>{progress}%</span>
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-light" data-bs-dismiss="modal">
              Cancel
            </button>
            <button className="btn btn-primary">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
