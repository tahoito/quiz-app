import '../App.css'; 

export default function GenreSelect({ onSelect }) {
  const genres = [
    { id: 'english', label: '英単語', color: '#e74c3c' },
    { id: 'korean', label: '韓国語', color: '#2980b9' },
    { id: 'kpop', label: 'K-POP', color: '#f39c12' },
    { id: 'sekaowa', label: 'セカオワ', color: '#27ae60' },
  ];

  return (
    <div className="genre-select">
    <div className="header"><a href="#">QuizApp</a></div>
    <div className="title">
        <h2>ジャンルを選んでください</h2>
    </div>
    <div className="genre-options">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="genre-card"
            style={{ backgroundColor: genre.color }}
            onClick={() => onSelect(genre.id)}
          >
            <div className="genre-label">{genre.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
