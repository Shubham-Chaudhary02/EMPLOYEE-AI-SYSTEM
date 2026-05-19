import axios from "axios";

const API = axios.create({
  baseURL:
    "https://employee-ai-backend-8fgy.onrender.com",
});

export default API;