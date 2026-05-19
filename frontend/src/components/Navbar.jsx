import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">AI HR System</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/add">Add Employee</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;