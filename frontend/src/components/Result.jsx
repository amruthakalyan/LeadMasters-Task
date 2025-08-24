import React from "react";
import { useExam } from "../context/ExamContext";

export default function Result() {
  const { score } = useExam();
  return (
    <>
      <header className="header">
        <div className="header-inner container">
          <div className="brand">LeadMasters • Exam</div>
        </div>
      </header>

      <main className="container">
        <div className="card result" style={{ maxWidth: 560, margin: "36px auto" }}>
          <h2 style={{ margin: 0 }}>Exam Finished</h2>
          <div className="score">{score.score} / {score.total}</div>
          <div className="actions center">
            <a className="btn btn-secondary" href="/" onClick={(e)=>{e.preventDefault(); window.location.reload();}}>Take Again</a>
          </div>
        </div>
      </main>
    </>
  );
}
