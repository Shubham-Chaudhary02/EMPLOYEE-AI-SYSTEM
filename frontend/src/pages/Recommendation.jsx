import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function Recommendation() {
  const { id } = useParams();

  const [recommendation, setRecommendation] =
    useState("Loading AI Recommendation...");

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    try {
      const employeeRes = await API.get(
        "/employees"
      );

      const employee = employeeRes.data.find(
        (emp) => emp._id === id
      );

      const { data } = await API.post(
        "/ai/recommend",
        {
          employee,
        }
      );

      setRecommendation(data.recommendation);
    } catch (error) {
      console.log(error);

      setRecommendation(
        "Failed to load AI recommendation"
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">
          AI Recommendation
        </h1>

        <div className="ai-box">
          {recommendation}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;