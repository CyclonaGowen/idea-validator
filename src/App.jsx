import { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Validating:", idea);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1>Idea Validator</h1>

      <p>
        Turn startup ideas into actionable business plans.
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          style={{ width: "100%" }}
          placeholder="Describe your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Validate Idea
        </button>
      </form>
    </div>
  );
}

export default App;