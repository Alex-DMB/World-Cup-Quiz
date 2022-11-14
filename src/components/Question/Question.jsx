import React, { useState } from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import { Lightbulb, Trash } from 'phosphor-react';
import Option from '../Option';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const currentFlag = currentQuestion.flags;

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div
            className={`
            w-[800px] gap-8 min-h-[384px] max-h-[800px]
            py-8 text-gold flex flex-col items-center justify-start
            bg-gradient-to-b from-[#59081f3f] to-[#330512] 

            `}>
            <p className='text-white font-extralight text-center'>
                Pergunta {quizState.currentQuestion + 1} de 7
            </p>

            <h2 className='uppercase font-light text-2xl text-center w-[600px]'>
                {currentQuestion.question}
            </h2>

            <div className='flex w-[calc(256px*2+16px)] gap-4 flex-wrap'>
                {currentQuestion.options.map((option, index) => (
                    <Option
                        flag={currentFlag[index]}
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        hide={quizState.optionToHide === option ? 'hide' : null}
                        selectOption={() => {
                            onSelectOption(option);
                        }}
                    />
                ))}
            </div>

            {quizState.answerSelected && (
                <button
                    className='underline duration-300 hover:scale-110'
                    onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
                    Continuar
                </button>
            )}

            {quizState.tip && <p>{currentQuestion.tip}</p>}

            {!quizState.tip &&
                !quizState.answerSelected &&
                !quizState.optionToHide && (
                    <div className='flex flex-col items-center'>
                        {currentQuestion.tip && (
                            <button
                                onClick={() => dispatch({ type: 'ANSWER_TIP' })}
                                className={` 
                            ${quizState.tip ? 'hidden' : ''} 
                                flex underline items-center gap-1
                                duration-300 hover:scale-105
                                `}>
                                <span>
                                    <Lightbulb size={16} weight='fill' />
                                </span>
                                Dica
                            </button>
                        )}

                        <button
                            onClick={() => dispatch({ type: 'REMOVE_OPTION' })}
                            className='
                                flex underline items-center gap-1
                                duration-300 hover:scale-105
                                '>
                            <span>
                                <Trash size={16} />
                            </span>
                            Excluir uma
                        </button>
                    </div>
                )}
        </div>
    );
};
export default Question;
