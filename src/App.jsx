import { useState } from "react";
import IdeaForm from "./components/IdeaForm";
import IdeaResults from "./components/IdeaResults";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);

  const generateScore = (idea) => {
  let score = 50;

  if (idea.length > 20) score += 10;
  if (idea.includes("AI")) score += 10;
  if (idea.includes("app")) score += 5;
  if (idea.includes("marketplace")) score += 10;

  return Math.min(score, 100);
};

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
      score: generateScore(idea),
      
      questions: [
  "Who is the first customer most likely to use this?",
  "What problem are they already paying to solve?",
  "What is the smallest version we could test this week?",
  "How would we know if this idea is worth continuing?",
],
actionPlan: [
  "Day 1: Define the target customer",
  "Day 2: Interview 3 potential users",
  "Day 3: Identify the biggest pain point",
  "Day 4: Sketch the MVP",
  "Day 5: Build a landing page or demo",
  "Day 6: Ask for feedback",
  "Day 7: Decide whether to build, pivot, or stop",
],
    });
  };

  

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>🚀 Idea Validator</h1>

      <p>Transform startup ideas into actionable business plans.</p>

      {!user ? (
  <RegisterForm onRegister={setUser} />
) : (
  <p>
    Welcome, <strong>{user.name}</strong>
  </p>
)}

      <IdeaForm idea={idea} setIdea={setIdea} onSubmit={validateIdea} />

      <IdeaResults result={result} />
    </div>
  );
}

export default App;