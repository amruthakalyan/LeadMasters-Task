import React, { useState } from "react";
import { ExamProvider } from "./context/ExamContext";
import Register from "./components/Register";
import Login from "./components/Login";
import Exam from "./components/Exam";
import Result from "./components/Result";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("register");

  return (
    <ExamProvider>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "exam" && <Exam setPage={setPage} />}
      {page === "result" && <Result />}
    </ExamProvider>
  );
}
