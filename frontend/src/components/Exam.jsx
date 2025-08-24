import React, { useEffect, useState, useMemo } from "react";
import { useExam } from "../context/ExamContext";
import API from "../api";

export default function Exam({ setPage }) {
  const { questions, setQuestions, answers, setAnswers, setScore } = useExam();
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(1800); // 30 mins

  useEffect(() => {
    API.get("/exam/questions").then((res) => setQuestions(res.data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!time) return void handleSubmit();
    const t = setInterval(() => setTime((v) => Math.max(v - 1, 0)), 1000);
    return () => clearInterval(t);
  }, [time]); // intentionally depends on `time` for a ticking display

  const handleSubmit = async () => {
    const formatted = Object.entries(answers).map(([qid, selected]) => ({
      questionId: qid,
      selected
    }));
    const res = await API.post("/exam/submit", { answers: formatted });
    setScore(res.data);
    setPage("result");
  };

  const mmss = useMemo(() => {
    const m = String(Math.floor(time / 60)).padStart(2, "0");
    const s = String(time % 60).padStart(2, "0");
    return `${m}:${s}`;
  }, [time]);

  if (!questions.length) {
    return (
      <>
        <header className="header"><div className="header-inner container">
          <div className="brand">LeadMasters • Exam</div>
          <div className="timer" aria-live="polite">Loading…</div>
        </div></header>
        <main className="container center" style={{ minHeight: "60vh" }}>
          <div className="card">Fetching questions…</div>
        </main>
      </>
    );
  }

  const q = questions[index];
  const progressPct = Math.round(((index + 1) / questions.length) * 100);

  return (
    <>
      <header className="header">
        <div className="header-inner container">
          <div className="brand">LeadMasters • Exam</div>
          <div className="timer" aria-live="polite">⏳ {mmss}</div>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <div className="q-meta">
            <div>Question {index + 1} of {questions.length}</div>
            <div>{progressPct}%</div>
          </div>
          <div className="progress" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${progressPct}%` }} />
          </div>

          <div className="q-text">{q.text}</div>

          <div className="options">
            {q.options.map((opt, i) => {
              const checked = answers[q._id] === i;
              return (
                <label key={i} className="option">
                  <input
                    type="radio"
                    name={`q-${q._id}`}
                    checked={checked}
                    onChange={() => setAnswers({ ...answers, [q._id]: i })}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>

          <div className="footer">
            <div className="actions">
              <button className="btn btn-secondary" disabled={index === 0} onClick={() => setIndex((v) => v - 1)}>Previous</button>
              <button className="btn btn-secondary" disabled={index === questions.length - 1} onClick={() => setIndex((v) => v + 1)}>Next</button>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </main>
    </>
  );
}





