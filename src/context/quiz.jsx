import { createContext, useReducer } from 'react';

import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    tip: false,
    optionToHide: null,
    feedback: '',
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if (nextQuestion === 7) {
                endGame = true;
            }

            if (state.score <= 2) {
                state.feedback =
                    'Você perdeu na fase de grupos \uD83E\uDD26\uD83D\uDE22';
            } else if (state.score === 3) {
                state.feedback =
                    'Você perdeu nas Oitavas de Final \uD83E\uDD21';
            } else if (state.score === 4) {
                state.feedback =
                    'Você perdeu nas Quartas de Final \uD83E\uDD21';
            } else if (state.score === 5) {
                state.feedback = 'Você perdeu na Semi-Final \uD83E\uDD49';
            } else if (state.score === 6) {
                state.feedback = 'Você perdeu na Final 	\uD83E\uDD48';
            } else if (state.score === 7) {
                state.feedback = 'Parabéns, você foi Campeão! \uD83C\uDFC6';
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
                optionToHide: null,
                feedback: state.feedback,
            };

        case 'NEW_GAME':
            return initialState;

        case 'ANSWER_TIP':
            return {
                ...state,
                tip: true,
            };

        case 'REMOVE_OPTION': {
            const questionWithoutOption =
                state.questions[state.currentQuestion];

            let repeat = true;
            let optionToHide;

            questionWithoutOption.options.forEach((option) => {
                if (option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                }
            });

            return {
                ...state,
                optionToHide,
                help: true,
            };
        }

        case 'CHECK_ANSWER':
            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;

            let correctAnswer = 0;

            if (answer === option) {
                correctAnswer = 1;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
                tip: false,
                help: false,
            };

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};
