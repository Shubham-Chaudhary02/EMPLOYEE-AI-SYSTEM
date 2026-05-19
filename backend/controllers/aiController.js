const axios = require("axios");

const getRecommendation = async (req, res) => {
  try {
    const { employee } = req.body;

    const prompt = `
You are an HR AI assistant.

Analyze this employee:

Name: ${employee.name}
Department: ${employee.department}
Skills: ${employee.skills.join(", ")}
Performance Score: ${employee.performanceScore}
Experience: ${employee.experience}

Give:
1. Promotion Recommendation
2. Training Suggestions
3. Improvement Feedback
4. Employee Ranking Insight
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "AI HR System",
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      recommendation:
        response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "AI recommendation failed",
    });
  }
};

module.exports = {
  getRecommendation,
};