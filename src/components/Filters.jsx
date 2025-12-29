export default function Filters() {
  return (
    <div className="card p-3 shadow-sm">
      <h6>
        <i className="bi bi-funnel"></i> Filters
      </h6>

      <label className="mt-3">Due Date</label>
      <input type="date" className="form-control" />

      <label className="mt-3">Category</label>
      <div className="d-flex flex-wrap gap-2">
        {["All", "Work", "Personal", "Shopping", "Health"].map((c) => (
          <button key={c} className="btn btn-outline-primary btn-sm">
            {c}
          </button>
        ))}
      </div>

      <label className="mt-3">Priority</label>
      <div className="d-flex gap-2">
        {["All", "High", "Medium", "Low"].map((p) => (
          <button key={p} className="btn btn-outline-primary btn-sm">
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
