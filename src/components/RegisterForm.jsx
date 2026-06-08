import { useState } from "react";

function RegisterForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please complete all fields.");
      return;
    }

    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <h2>Create Account</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;