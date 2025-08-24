import React, { useState } from "react";
import API from "../api";

export default function Register({ setPage }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    setPage("login");
  };

  return (
    <>
      <header className="header">
        <div className="header-inner container">
          <div className="brand">LeadMasters • Exam</div>
        </div>
      </header>

      <main className="container">
        <div className="card" style={{ maxWidth: 520, margin: "40px auto" }}>
          <h2 style={{ marginTop: 0 }}>Create account</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input className="input" placeholder="Username"
              onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input className="password" type="password" placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <div className="actions">
              <button type="submit" className="btn btn-primary">Register</button>
              <button type="button" className="btn btn-secondary" onClick={() => setPage("login")}>I have an account</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

