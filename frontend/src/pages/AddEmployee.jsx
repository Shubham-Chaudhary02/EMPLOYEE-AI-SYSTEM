import { useState } from "react";
import API from "../services/api";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/employees", {
        ...employee,
        skills: employee.skills.split(","),
      });

      alert("Employee Added");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">
          Add Employee
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills comma separated"
            onChange={handleChange}
          />

          <input
            type="number"
            name="performanceScore"
            placeholder="Performance Score"
            onChange={handleChange}
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
          />

          <button>Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;