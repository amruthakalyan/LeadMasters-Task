import React, { useState } from "react";
import API from "../api";

export default function Login({ setPage }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    setPage("exam");
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
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input className="input" placeholder="Username"
              onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input className="password" type="password" placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <div className="actions">
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="button" className="btn btn-secondary" onClick={() => setPage("register")}>Create account</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
