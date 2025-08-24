import React from 'react';

const Question = ({ question, questionNumber, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="question-container">
      <h3>Question {questionNumber}</h3>
      <p>{question.questionText}</p>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <div 
            key={index} 
            className={`option ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(index)}
          >
            <input 
              type="radio" 
              id={`option-${index}`}
              name="answer"
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
            />
            <label htmlFor={`option-${index}`}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;