export default function Navbar() {
  return (
    <nav className="navbar bg-white border-bottom px-4">
      <div className="d-flex align-items-center gap-2">
        <div className="bg-primary text-white rounded p-2">
          <i className="bi bi-check2-square"></i>
        </div>
        <div>
          <h5 className="mb-0">TaskFlow</h5>
          <small className="text-muted">Manage your tasks efficiently</small>
        </div>
      </div>

      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#taskModal"
      >
        + New Task
      </button>
    </nav>
  );
}
