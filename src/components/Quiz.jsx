import { useState } from 'react';
import '../App.css'; 

export default function Quiz({ questions, genre }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const q = questions[currentQuestion];


  function handleAnswer(option) {
    const correct = option === q.answer;
    setIsCorrect(correct);
    setShowCorrectModal(true);

    if (correct) {
        setScore(score + 1);
    }

    setTimeout(() => {
        setShowCorrectModal(false);
        goToNextQuestion();
    }, 1000);
    }


    function goToNextQuestion() {
        const next = currentQuestion + 1;
        if (next < questions.length) {
        setCurrentQuestion(next);
        } else {
        setShowResult(true);
        }
    }

    return (
    <div>
      <div className="header"><a href="./GenreSelect.jsx">QuizApp</a></div>

        {!showResult && (
        <div className="title">
            <h2>
            {genre === 'english'
                ? '英単語クイズ'
                : genre === 'korean'
                ? '韓国語クイズ'
                : genre === 'kpop'
                ? 'K-POPクイズ'
                : genre === 'セカオワ'
                ? 'SEKAI NO OWARIクイズ'
                : genre === 'プログラミング'
                ? 'プログラミングクイズ'
                : 'クイズ'}
            </h2>
            <p>正しい答えを選びましょう。</p>
        </div>
        )}

        {showCorrectModal && (
            <div className="modal">
                <div className="modal-content">
                <h2>{isCorrect ? '正解！' : '不正解…'}</h2>
                <div style={{ fontSize: '80px', color: isCorrect ? 'red' : 'blue' }}>
                    {isCorrect ? '◯' : '✕'}
                </div>
                </div>
            </div>
            )}



      {showResult ? (
        <div className="modal">
            <div className="modal-content">
            <h2>クイズが終わりました！</h2>
            <p>あなたの正解数は {score}問 / 全{questions.length}問</p>
            <a href="./GenreSelect.jsx" className="return-button">ジャンル選択に戻る</a>
            </div>
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
