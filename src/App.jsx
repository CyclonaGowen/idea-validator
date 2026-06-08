import { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);

  const validateIdea = (e) => {
    e.preventDefault();

    setResult({
      customer: "Small business owners",
      problem: "Difficulty validating business ideas before investing money",
      mvp: [
        "Idea input",
        "AI analysis",
        "Validation questions",
        "Action plan",
      ],
      revenue: "Subscription",
      risks: "Poor market demand",
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>🚀 Idea Validator</h1>

      <p>
        Transform startup ideas into actionable business plans.
      </p>

      <form onSubmit={validateIdea}>
        <textarea
          rows="6"
          style={{ width: "100%" }}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your startup idea..."
        />

        <br />
        <br />

        <button type="submit">
          Validate Idea
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Analysis</h2>

          <p>
            <strong>Target Customer:</strong>{" "}
            {result.customer}
          </p>

          <p>
            <strong>Problem:</strong>{" "}
            {result.problem}
          </p>

          <p>
            <strong>Revenue Model:</strong>{" "}
            {result.revenue}
          </p>

          <p>
            <strong>Primary Risk:</strong>{" "}
            {result.risks}
          </p>

          <h3>MVP Features</h3>

          <ul>
            {result.mvp.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;