import { useEffect, useState } from "react";

import API from "../services/api";

import EmployeeCard from "../components/EmployeeCard";

import SearchFilter from "../components/SearchFilter";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const [department, setDepartment] =
    useState("");

  useEffect(() => {
    fetchEmployees();
  }, [department]);

  const fetchEmployees = async () => {
    try {
      let url = "/employees";

      if (department) {
        url = `/employees/search?department=${department}`;
      }

      const { data } = await API.get(url);

      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">
        Employees
      </h1>

      <SearchFilter
        setDepartment={setDepartment}
      />

      <div className="grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
          />
        ))}
      </div>
    </div>
  );
}

export default Employees;