import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import { Howl } from 'howler';
import feedbackSound from '@audio/feedback.mp3';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true,
        });
        sound.play();
    };

    callMySound(feedbackSound);

    return (
        <div
            className='
                w-[800px] gap-16 h-96
                py-8 flex flex-col items-center justify-center
                bg-gradient-to-b from-primary-800 to-primary-900
                shadow-2xl shadow-black

                responsive:w-[300px] responsive:shadow-transparent responsive:from-transparent responsive:to-transparent
                '>
            <h2 className='text-gold text-2xl responsive:text-xl'>
                Fim de Jogo!
            </h2>

            <div>
                <p className='text-center responsive:text-sm'>
                    Pontuação: {quizState.score} de 7
                </p>
                <p className='text-xl text-center responsive:text-base'>
                    {quizState.feedback}
                </p>
            </div>

            <button
                className='
                  text-gold text-lg underline
                  duration-300 hover:scale-110
                  '
                onClick={() => dispatch({ type: 'NEW_GAME' })}>
                Reiniciar
            </button>
        </div>
    );
};

export default GameOver;
