function IdeaForm({ idea, setIdea, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your startup idea..."
      />

      <br />
      <br />

      <button type="submit">Validate Idea</button>
    </form>
  );
}

export default IdeaForm;