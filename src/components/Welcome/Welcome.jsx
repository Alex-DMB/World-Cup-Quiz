import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import TrophyImage from '@img/trophy.png';
import Button from '../Button';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='font-light text-2xl'>Seja Bem Vindo</h2>

            <p className='font-extralight text-gold'>
                Clique no botão abaixo para começar
            </p>

            <img
                className='opacity-60 hover:opacity-100 w-96 my-8 shadow-2xl shadow-gold/20 
                border border-gold transition duration-700 hover:scale-105'
                src={TrophyImage}
                alt='Troféu da Copa do Mundo'
            />
            <Button
                onClick={() => dispatch({ type: 'CHANGE_STATE' })}
                text='Iniciar'></Button>
            <p className='font-extralight mt-8'>
                Desenvolvido por Alex (@Ryuu.Dev)
            </p>
        </div>
    );
};

export default Welcome;
