import { useState } from "react";

export default function EditTaskModal({ task, editTask, close }) {
  const [form, setForm] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    editTask({ ...form, progress: Number(form.progress) });
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "#00000066" }}
    >
      <div className="modal-dialog modal-lg">
        <form className="modal-content p-4" onSubmit={submit}>
          <div className="modal-header">
            <h5>Edit Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>

          <div className="modal-body">
            <label>Task Title</label>
            <input
              name="title"
              className="form-control mb-3"
              value={form.title}
              onChange={handleChange}
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              className="form-control mb-3"
              value={form.description || ""}
              onChange={handleChange}
            />

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  className="form-control"
                  value={form.dueDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label>Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Health</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>Priority</label>
                <select
                  name="priority"
                  className="form-select"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <label className="d-flex justify-content-between">
              Progress
              <span>{form.progress}%</span>
            </label>
            <input
              type="range"
              name="progress"
              min="0"
              max="100"
              className="form-range"
              value={form.progress}
              onChange={handleChange}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-light" onClick={close}>
              Cancel
            </button>
            <button className="btn btn-primary">Update Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
