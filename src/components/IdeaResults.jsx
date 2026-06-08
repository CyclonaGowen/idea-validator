function IdeaResults({ result }) {
  if (!result) return null;

  const summaryCard = {
    flex: 1,
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  };

  const cardStyle = {
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Analysis</h2>

      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <div style={summaryCard}>
          <h4>Target Customer</h4>
          <p>{result.customer}</p>
        </div>

        <div style={summaryCard}>
          <h4>Revenue Model</h4>
          <p>{result.revenue}</p>
        </div>

        <div style={summaryCard}>
          <h4>Primary Risk</h4>
          <p>{result.risks}</p>
        </div>
      </div>

      <p>
        <strong>Problem:</strong> {result.problem}
      </p>

      <h3>MVP Features</h3>
      <div>
        {result.mvp.map((feature) => (
          <div key={feature} style={cardStyle}>
            {feature}
          </div>
        ))}
      </div>

      <h3>Validation Questions</h3>
      <div>
        {result.questions.map((question) => (
          <div key={question} style={cardStyle}>
            {question}
          </div>
        ))}
      </div>

      <h3>7-Day Action Plan</h3>
      <div>
        {result.actionPlan.map((step) => (
          <div key={step} style={cardStyle}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IdeaResults;