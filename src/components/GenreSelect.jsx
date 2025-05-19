export default function GenreSelect({ onSelect }) {
  return (
    <div className="genre-select">
      <h2>ジャンルを選んでください</h2>
      <div className="genre-buttons">
        <button onClick={() => onSelect('english')}>英単語</button>
        <button onClick={() => onSelect('english')}>英単語</button>
        <button onClick={() => onSelect('english')}>英単語</button>
      </div>
    </div>
  );
}
