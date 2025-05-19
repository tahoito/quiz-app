import { useState } from 'react';
import GenreSelect from './components/GenreSelect'; 
import Quiz from './components/Quiz';              
import { englishQuestions } from './questions/english';
import { koreanQuestions } from './questions/korean';
import { kpopQuestions } from './questions/kpop';
import { sekaowaQuestions } from './questions/sekaowa';
import { programmingQuestions } from './questions/programming';


export default function App() {
  const [genre, setGenre] = useState(null); 
  const [questions, setQuestions] = useState([]);

  function handleGenreSelect(selectedGenre) {
    setGenre(selectedGenre);
    switch (selectedGenre) {
      case 'english':
        setQuestions(englishQuestions);
        break;
      case 'korean':
        setQuestions(koreanQuestions);
        break;
      case 'kpop':
        setQuestions(kpopQuestions);
        break;
      case 'sekaowa':
        setQuestions(sekaowaQuestions);
        break;
      case 'programming':
        setQuestions(programmingQuestions);
        break;
      default:
        setQuestions([]);
    }
  }

    return (
    <div>
      {genre === null ? (
        <GenreSelect onSelect={handleGenreSelect} />
      ) : (
        <Quiz questions={questions} genre={genre} />
      )}
    </div>
  );
}

