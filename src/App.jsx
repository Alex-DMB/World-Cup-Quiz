import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';
import GameOver from './components/GameOver/GameOver';

import Button from './components/Button';
import Option from './components/Option';

import "/node_modules/flag-icons/css/flag-icons.min.css";



function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="flex flex-col justify-center items-center bg-background h-screen">

      <h1 className='text-2xl mb-16'>Quiz Copa do Mundo</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}
      {quizState.gameStage === 'End' && <GameOver/>}

    </div>
  )
}

export default App
