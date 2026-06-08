import { useState } from "react";
import IdeaForm from "./components/IdeaForm";
import IdeaResults from "./components/IdeaResults";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);

  const validateIdea = (e) => {
    e.preventDefault();

    if (!idea.trim()) {
      alert("Please enter an idea.");
      return;
    }

    setResult({
      customer: `People interested in "${idea}"`,
      problem: `Users currently lack an easy solution related to ${idea}.`,
      mvp: [
        "User registration",
        "Idea dashboard",
        "Validation scoring",
        "Action plan generator",
      ],
      revenue: "Freemium + Subscription",
      risks: "Market adoption and competition",
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>🚀 Idea Validator</h1>

      <p>Transform startup ideas into actionable business plans.</p>

      <IdeaForm idea={idea} setIdea={setIdea} onSubmit={validateIdea} />

      <IdeaResults result={result} />
    </div>
  );
}

export default App;