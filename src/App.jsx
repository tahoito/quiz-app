// src/App.jsx
import { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Kyoto', 'Nagoya'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5'],
    answer: '4',
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  }

  if (showResult) {
    return <h2>You scored {score} out of {questions.length}!</h2>;
  }

  const q = questions[currentQuestion];

  return (
    <div>
      <h2>{q.question}</h2>
      {q.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
