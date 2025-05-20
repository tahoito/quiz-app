import '../App.css'; 

export default function GenreSelect({ onSelect }) {
  const genres = [
    { id: 'english', label: '英単語', color: '#e74c3c' },       // レッド系（目立つ）
    { id: 'korean', label: '韓国語', color: '#3498db' },       // ブルー系
    { id: 'kpop', label: 'K-POP', color: '#f39c12' },          // オレンジ系
    { id: 'sekaowa', label: 'セカオワ', color: '#2ecc71' },    // グリーン系

    { id: 'txt', label: 'トゥバ', color: '#9b59b6' },          // パープル系
    { id: 'programming', label: 'プログラミング', color: '#34495e' }, // ネイビー系
    { id: 'proverbs', label: 'ことわざ', color: '#e67e22' },    // ダークオレンジ
    { id: 'prefecture', label: '都道府県', color: '#1abc9c' },  // エメラルドグリーン
  ];



  return (
    <div className="genre-select">
    <div className="header"><a href="/">QuizApp</a></div>
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
