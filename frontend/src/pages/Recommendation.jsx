import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

function Recommendation() {
  const { id } = useParams();

  const [recommendation, setRecommendation] =
    useState("");

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    try {
      const employeeRes = await API.get(
        "/employees"
      );

      const employee =
        employeeRes.data.find(
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
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">
          AI Recommendation
        </h1>

        <p
          style={{
            lineHeight: "2",
            whiteSpace: "pre-wrap",
          }}
        >
          {recommendation}
        </p>
      </div>
    </div>
  );
}

export default Recommendation;