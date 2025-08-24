import React, { createContext, useState, useContext } from "react";

const ExamContext = createContext();

export const useExam = () => useContext(ExamContext);

export const ExamProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  return (
    <ExamContext.Provider value={{ questions, setQuestions, answers, setAnswers, score, setScore }}>
      {children}
    </ExamContext.Provider>
  );
};
