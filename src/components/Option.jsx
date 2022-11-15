import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { Howl } from 'howler';
import wrongSound from '@audio/wrong.mp3';
import correctSound from '@audio/correct.mp3';

export default function Option({ option, selectOption, answer, flag, hide }) {
    const [quizState, dispatch] = useContext(QuizContext);

    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true,
        });
        sound.play();
    };

    return (
        <button
            onClick={() => {
                selectOption();
                {
                    !quizState.answerSelected && option === answer
                        ? callMySound(correctSound)
                        : '';
                }
                {
                    !quizState.answerSelected && option !== answer
                        ? callMySound(wrongSound)
                        : '';
                }
            }}
            className={`
                clipPath w-64 h-12 relative
                flex items-center justify-center 
                cursor-pointer 
                hover:relative hover:bg-gold 
                focus:relative focus:bg-gold

                ${
                    quizState.answerSelected && option === answer
                        ? 'relative bg-gold'
                        : ''
                }
                
                ${hide ? 'hidden' : ''}
                
                `}>
            <div
                className={`
                    clipPath absolute w-[99%] h-[92%]
                    flex justify-center align-center gap-2 text-white
                    bg-gradient-to-r from-primary-500 to-primary-700 

                    ${
                        quizState.answerSelected && option === answer
                            ? 'bg-gradient-to-r from-correct-500 to-correct-700 clipPath absolute w-[99%] h-[92%]'
                            : ''
                    }
                    
                    ${
                        quizState.answerSelected && option !== answer
                            ? 'bg-gradient-to-r from-wrong-500 to-wrong-700 '
                            : ''
                    }`}>
                {flag && <span className={`self-center fi fi-${flag}`}></span>}
                <p className='font-light text-lg self-center'>{option}</p>
            </div>
        </button>
    );
}
