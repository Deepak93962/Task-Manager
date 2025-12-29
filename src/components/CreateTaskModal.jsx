export default function CreateTaskModal({ addTask }) {
  const submit = (e) => {
    e.preventDefault();
    const f = e.target;

    addTask({
      title: f.title.value,
      category: f.category.value,
      priority: f.priority.value,
      dueDate: f.date.value,
    });

    f.reset();
  };

  return (
    <div className="modal fade" id="taskModal">
      <div className="modal-dialog modal-lg">
        <form className="modal-content p-3" onSubmit={submit}>
          <div className="modal-header">
            <h5>Create New Task</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <label>Task Title</label>
            <input name="title" className="form-control mb-3" required />

            <label>Description</label>
            <textarea className="form-control mb-3"></textarea>

            <div className="row">
              <div className="col-md-6">
                <label>Due Date</label>
                <input name="date" type="date" className="form-control" />
              </div>
              <div className="col-md-3">
                <label>Category</label>
                <select name="category" className="form-select">
                  <option>Work</option>
                  <option>Personal</option>
                </select>
              </div>
              <div className="col-md-3">
                <label>Priority</label>
                <select name="priority" className="form-select">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
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
