import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';
import GameOver from './components/GameOver/GameOver';

import '/node_modules/flag-icons/css/flag-icons.min.css';

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({ type: 'REORDER_QUESTIONS' });
    }, []);

    return (
        <div
            className={`
        flex flex-col justify-center items-center bg-background h-screen
        ${
            quizState.gameStage === 'Playing'
                ? 'responsive:bg-gradient-to-b responsive:from-primary-800 responsive:to-primary-900'
                : ''
        }
        ${
            quizState.gameStage === 'End'
                ? 'responsive:bg-gradient-to-b responsive:from-primary-800 responsive:to-primary-900'
                : ''
        }
        `}>
            {quizState.gameStage === 'Start' && <Welcome />}
            {quizState.gameStage === 'Playing' && <Question />}
            {quizState.gameStage === 'End' && <GameOver />}
        </div>
    );
}

export default App;
