import { useState } from 'react';
import '../App.css'; 

export default function Quiz({ questions, genre }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = questions[currentQuestion];

  function handleAnswer(option) {
    if (option === q.answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div>
      <div className="header">QuizApp</div>

      <div className="title">
        <h2>
          {genre === 'english'
            ? '英単語クイズ'
            : genre === 'korean'
            ? '韓国語クイズ'
            : genre === 'kpop'
            ? 'K-POPクイズ'
            : 'クイズ'}
        </h2>
        <p>正しい意味や答えを選びましょう。</p>
      </div>

      {showResult ? (
        <div className="result">
          <h2>Quiz finished!</h2>
          <p>You scored {score} out of {questions.length}!</p>
        </div>
      ) : (
        <div className="question-block">
          <div className="question-wrapper">
            <div className="number">
              第{currentQuestion + 1}問 / 全{questions.length}問
            </div>

            <div className="question-box">
              <p>問題</p>
              <div className="question-text">{q.question}</div>
            </div>

            <div className="ex-choice">この中から選んでください。</div>

            <div className="choices">
              <div className="choices-box">
                {q.options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
