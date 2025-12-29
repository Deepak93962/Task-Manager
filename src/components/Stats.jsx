export default function Stats({ tasks }) {
  return (
    <div className="row g-3 mb-4">
      <Stat title="Total Tasks" value={tasks.length} icon="clock" />
      <Stat title="Completed" value="0" icon="check-circle" />
      <Stat title="Overdue" value="0" icon="exclamation-circle" />
      <Stat title="Avg Progress" value="55%" icon="graph-up" />
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
