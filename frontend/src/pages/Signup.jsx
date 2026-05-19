import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/auth/signup",
        formData
      );

      console.log(data);

      alert("Signup Successful");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">Signup</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <button type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;