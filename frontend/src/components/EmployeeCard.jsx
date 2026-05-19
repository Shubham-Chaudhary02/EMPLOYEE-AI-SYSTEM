import { Link } from "react-router-dom";

function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <h2>{employee.name}</h2>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Performance Score:</strong>
        {employee.performanceScore}
      </p>

      <p>
        <strong>Experience:</strong>
        {employee.experience} Years
      </p>

      <p>
        <strong>Skills:</strong>
        {employee.skills.join(", ")}
      </p>

      <Link to={`/recommendation/${employee._id}`}>
        <button>
          Generate AI Recommendation
        </button>
      </Link>
    </div>
  );
}

export default EmployeeCard;