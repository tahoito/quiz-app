import { useState } from 'react';
import GenreSelect from './components/GenreSelect'; 
import Quiz from './components/Quiz';              
import { englishQuestions } from './questions/english';
import { koreanQuestions } from './questions/korean';
import { kpopQuestions } from './questions/kpop';
import { sekaowaQuestions } from './questions/sekaowa';
import { programmingQuestions } from './questions/programming';
import { proverbsQuestions } from './questions/proverbs';
import { prefectureQuestions } from './questions/prefecture';
import { txtQuestions } from './questions/txt';

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
      case 'txt':
        setQuestions(txtQuestions);
        break;
      case 'programming':
        setQuestions(programmingQuestions);
        break;
      case 'proverbs':
        setQuestions(proverbsQuestions);
        break;
      case 'prefecture':
        setQuestions(prefectureQuestions);
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

