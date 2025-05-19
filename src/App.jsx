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
      <div className="title">
        <h2>英単語クイズ</h2>
        <p>3択の中から英単語の意味を選びましょう。</p>
      </div>

      {showResult ? (
        <div className="result">
          <h2>Quiz finished!</h2>
          <p>You scored {score} out of {questions.length}!</p>
        </div>
      ) : (
        <div className="question-block">
          <div className="question-wrapper">
            <div className="number">第{currentQuestion + 1}問/全{questions.length}問</div>
            <div className="question-box">
              <p>問題</p>
              <div className="question-text">{q.question}</div>
            </div>
          </div>

          <div className="choices">
            {q.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
