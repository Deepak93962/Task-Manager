export default function Stats({ tasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;

  const avgProgress =
    tasks.length === 0
      ? 0
      : Math.round(
          tasks.reduce((sum, t) => sum + (t.progress || 0), 0) / tasks.length
        );

  return (
    <div className="row g-3 mb-4">
      <Stat title="Total Tasks" value={tasks.length} icon="clock" />

      
      <Stat title="Completed" value={completedCount} icon="check-circle" />

      <Stat title="Overdue" value="0" icon="exclamation-circle" />
      <Stat title="Avg Progress" value={`${avgProgress}%`} icon="graph-up" />
    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="col-md-3">
      <div className="card p-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4>{value}</h4>
            <small className="text-muted">{title}</small>
          </div>
          <i className={`bi bi-${icon} fs-3 text-primary`}></i>
        </div>
      </div>
    </div>
  );
}
