"use client";

import React,{useState} from "react";
import { LIC_QUIZ_QUESTIONS, QuizQuestion } from "@/types";

const LIC_Quiz: React.FC = () => {
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [score,setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer,setSelectedAnswer] = useState<string | null>(null);

    const question : QuizQuestion[] = LIC_QUIZ_QUESTIONS;
    const currentQuestion = question[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setSelectedAnswer(option);
    }

    const goToNext = () => {
        if (selectedAnswer!==null){
            if (selectedAnswer === currentQuestion.answer){
                setScore(score => score + 1);
            }
        }

        setSelectedAnswer(null);

        const nextQuestion = currentQuestionIndex+1;
        if(nextQuestion < question.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true)
        }

        
    };


    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setSelectedAnswer(null);
            setCurrentQuestionIndex(currentQuestionIndex-1)
        }
    }

    

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
    }
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center font-bold  bg-slate-800  text-white mt-10  p-4 ">
            <div className="w-full max-w-lg bg-white text-gray-800 p-8 rounded-xl shadow-lg ">
                <h1 className="text-2xl font-bold mb-6 text-center text-slate-700"> 
                    LIC Mock Exam Practice
                </h1>

                {showScore ? (
                    <div className="text-center space-y-4">
                        <p className="text-xl font-semibold">
                                Quiz Finished! Your Score: {score} 
                        </p>
                        <button onClick={resetQuiz}
                                className="w-full py-3 bg-red-400 hover:bg-red-600 rounded-lg text-lg font-medium transition duration-200">
                            Retake Exam
                        </button>
                    </div>
                ) : (

                    <>
                        <div className="mb-8">
                            <div className="text-sm font-medium mb-2 text-gray-800">
                                Question {currentQuestionIndex + 1}/{question.length}
                            </div>
                            <div className="text-2xl font-bold">
                                {currentQuestion.question}
                            </div>
                        </div>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(option)}
                                    className={`w-full text-left py-3 px-4  rounded-lg transition duration-200 cursor-pointer
                                            ${selectedAnswer === option 
                                                ? 'bg-blue-600 text-white font-semibold shadow-md'
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                            }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                    <div className=" flex justify-between mt-8 pt-4 border-t border-gray-200">
                        <button onClick={goToPrevious} 
                        disabled={currentQuestionIndex === 0}
                        className={`flex justify-center mt-8  border border-t rounded-lg py-2 px-3 transition duration-200   cursor-pointer 
                                ${currentQuestionIndex === 0 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-300 hover:bg-blue-600 text-gray-900 hover:text-white'
                                }`}
                        >  
                            Prevoius
                        </button>

                        <button onClick={goToNext} 
                        disabled={selectedAnswer === null}
                        className={`flex justify-center mt-8  border border-t rounded-lg py-2 px-3  cursor-pointer 
                            ${selectedAnswer === null
                                ? 'bg-gray-300 cursor-not-allowed'
                                : currentQuestionIndex === question.length-1
                                        ? 'bg-green-300 hover:bg-green-700' 
                                        : 'bg-blue-300 hover:bg-blue-600' 
                                    } `}>
                            {currentQuestionIndex === question.length-1 ? 'Submit Exam' : 'Save & Next'}
                        </button>
                    </div>


                    
                    </>

                )}
            </div>

        </div>
    )

}

export default LIC_Quiz;


