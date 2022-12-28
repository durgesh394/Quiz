import { useState } from 'react';
import './App.css';
import EndQuiz from './components/EndQuiz';
import Menu from './components/Menu';
import StartQuiz from './components/StartQuiz';
import { Question } from './QuizContext/Question';

import Context from './QuizContext/Context';
function App() {
  const [quizState, setQuizState] = useState("menu");
  const [name, setname] = useState("");
  const [CurrQuestion, setCurrQuestion] = useState(0);
  const [Score, setScore] = useState(0);

  return (
    <div className="App">
      <Context.Provider value={{ quizState, setQuizState, Question, CurrQuestion, setCurrQuestion, Score, setScore, name, setname }}>
        <header className="App-header">
          {quizState == "menu" && <Menu />}
          {quizState == "StartQuiz" && <StartQuiz />}
          {quizState == "EndQuiz" && <EndQuiz />}
        </header>
      </Context.Provider>
    </div>
  );
}

export default App;
