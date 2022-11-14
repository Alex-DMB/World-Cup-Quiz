import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import { Howl } from 'howler';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const feedback = ['src/audio/feedback.mp3'];
    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true,
        });
        sound.play();
    };

    callMySound(feedback);

    return (
        <div
            className='
    w-[800px] gap-16 h-96
    py-8 flex flex-col items-center justify-center
    bg-gradient-to-b from-[#59081f3f] to-[#330512]'>
            <h2 className='text-gold text-2xl'>Fim de Jogo!</h2>

            <div>
                <p className='text-center'>Pontuação: {quizState.score} de 7</p>
                <p className='text-xl  text-center'>{quizState.feedback}</p>
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
