function IdeaResults({ result }) {
  if (!result) return null;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Analysis</h2>

      <p>
        <strong>Target Customer:</strong> {result.customer}
      </p>

      <p>
        <strong>Problem:</strong> {result.problem}
      </p>

      <p>
        <strong>Revenue Model:</strong> {result.revenue}
      </p>

      <p>
        <strong>Primary Risk:</strong> {result.risks}
      </p>

      <h3>MVP Features</h3>
      <h3>Validation Questions</h3>
<div>
  {result.questions.map((question) => (
    <div
      key={question}
      style={{
        padding: "12px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {question}
    </div>
  ))}
</div>

<h3>7-Day Action Plan</h3>
<div>
  {result.actionPlan.map((step) => (
    <div
      key={step}
      style={{
        padding: "12px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {step}
    </div>
  ))}
</div>

      <ul>
        {result.mvp.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default IdeaResults;