import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/employees" element={<Employees />} />

        <Route path="/add" element={<AddEmployee />} />

        <Route
          path="/recommendation/:id"
          element={<Recommendation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;