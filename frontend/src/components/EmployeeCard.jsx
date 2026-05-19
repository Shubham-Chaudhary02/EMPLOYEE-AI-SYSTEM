import { Link } from "react-router-dom";

function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <h2>{employee.name}</h2>

      <p>{employee.email}</p>

      <p>
        <strong>Department:</strong>{" "}
        {employee.department}
      </p>

      <p>
        <strong>Score:</strong>{" "}
        {employee.performanceScore}
      </p>

      <p>
        <strong>Experience:</strong>{" "}
        {employee.experience} Years
      </p>

      <button>
        <Link
          to={`/recommendation/${employee._id}`}
        >
          AI Recommendation
        </Link>
      </button>
    </div>
  );
}

export default EmployeeCard;