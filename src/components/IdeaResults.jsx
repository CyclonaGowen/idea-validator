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

      <ul>
        {result.mvp.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default IdeaResults;