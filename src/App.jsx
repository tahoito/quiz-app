import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const questions = [
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Kyoto', 'Nagoya'],
    answer: 'Tokyo',
  },
  {
    question: 'Which one is a JavaScript framework?',
    options: ['Laravel', 'React', 'Django'],
    answer: 'React',
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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

  const q = questions[currentQuestion];

  return (
    <div>
      <div className="header">QuizApp</div>

      {showResult ? (
        <div className="result">
          <h2>Quiz finished!</h2>
          <p>You scored {score} out of {questions.length}!</p>
        </div>
      ) : (
        <div className="question-block">
          <h2>{q.question}</h2>
          {q.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
