'use client'
import GlobalApi from '@/app/api/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { BiSolidPencil } from "react-icons/bi";

const QuizData = ({ params }) => {

    const { user } = useUser() // Get the user from Clerk
    const { quizid } = React.use(params)
    const email = user?.primaryEmailAddress?.emailAddress
    const [enrolquiz, setEnrolQuiz] = useState([])
    const [activeIndex, setActiveINdex] = useState(0)
    const [actind4quiz, setActive4quiz] = useState(0)
    const [answersofQuiz, setAnserofQuiz] = useState([])  // Answers state
    const [next, setNext] = useState(false)

    // Function to fetch quiz data
    const quizdata = (email, quizId) => {
        GlobalApi.getQuizDataWithEnroll(email, quizId).then((req) => {
            console.log(req) // Log the response
            setEnrolQuiz(req.userEnrolls[0].course.quiz[0]) // Log the response
        })
    }

    // Load answers from localStorage when component mounts
    useEffect(() => {
        if (email && quizid) {
            quizdata(email, quizid)
        }

        // Load answers from localStorage
        const storedAnswers = localStorage.getItem(`quizAnswers_${quizid}`);
        if (storedAnswers) {
            setAnserofQuiz(JSON.parse(storedAnswers)); // Parse and set the saved answers
        }

    }, [user, quizid]);

    const handleClickNumber = (index) => {
        setActiveINdex(index)
        setActive4quiz(0)

        // Check if the user is on the last question
        if (index === enrolquiz?.question?.length - 1) {
            setNext(true); // Set next to true when on the last question
        } else {
            setNext(false); // Set next to false for all other questions
        }
    }

    const handleChooseAnserw = (number) => {
        setActive4quiz(number)

        // Translate the answer to the corresponding option
        let transAns;
        if (number === 1) transAns = "A";
        else if (number === 2) transAns = "B";
        else if (number === 3) transAns = "C";
        else if (number === 4) transAns = "D";

        // Store the selected answer
        answerStorage(transAns);
    }

    const answerStorage = (transAns) => {
        // Store the selected answer in the answers array by activeIndex (question index)
        const updatedAnswers = [...answersofQuiz];
        updatedAnswers[activeIndex] = transAns;

        // Update the state with the selected answer for the current question
        setAnserofQuiz(updatedAnswers);

        // Save the answers to localStorage
        localStorage.setItem(`quizAnswers_${quizid}`, JSON.stringify(updatedAnswers));
    };

    // Check for pre-selected answers when rendering the options
    const isAnswerSelected = (index) => {
        return answersofQuiz[index];
    }

    console.log(answersofQuiz) // Log the answers array to see the state updates

    return (
        <div>
            <div className=' bg-blod2-image cursor-default bg-cover rounded-xl p-8 m-4'>
                <div className=' backdrop-blur-2xl p-3 px-8 rounded-xl outline-dashed outline-white outline-2'>
                    <div className=' flex justify-end'>
                        <h4 className=' text-right font-arabicUI3 text-6xl bg-white/10 p-4 w-fit rounded-md justify-start flex text-white'>
                            <BiSolidPencil /> {enrolquiz.quiztitle}
                        </h4>
                    </div>
                    <div>
                        <div className=' mt-10 grid grid-cols-11 max-md:grid-cols-4 max-sm:grid-cols-3 max-lg:grid-cols-5 max-xl:grid-cols-7 gap-3'>
                            {enrolquiz?.question?.map((item, index) => (
                                <h2
                                    onClick={() => handleClickNumber(index)}
                                    className={`mb-7 cursor-pointer font-arabicUI3 text-4xl p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none ${activeIndex === index ? "bg-gray-800 text-white scale-125 mx-4" : "bg-white text-gray-800"}`}
                                    key={index}>
                                    {index + 1}
                                </h2>
                            ))}
                        </div>
                        <h2 className={`mb-7 cursor-pointer font-arabicUI3 text-4xl p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-white text-gray-800`}>
                            {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.qus : 'No question available'}
                        </h2>
                        <div className='grid max-md:grid-cols-1 grid-cols-2'>
                            <h2 onClick={() => handleChooseAnserw(1)} className={`mb-7 cursor-pointer font-arabicUI3 text-4xl m-3 p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-gray-800 ${actind4quiz === 1 || isAnswerSelected(activeIndex) === "A" ? "bg-green-400 text-gray-800" : ""} text-white`}>
                                {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.opationA : 'No question available'}
                            </h2>
                            <h2 onClick={() => handleChooseAnserw(2)} className={`mb-7 cursor-pointer font-arabicUI3 text-4xl m-3 p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-gray-800 ${actind4quiz === 2 || isAnswerSelected(activeIndex) === "B" ? "bg-green-400 text-gray-800" : ""} text-white`}>
                                {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.opationB : 'No question available'}
                            </h2>
                            <h2 onClick={() => handleChooseAnserw(3)} className={`mb-7 cursor-pointer font-arabicUI3 text-4xl m-3 p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-gray-800 ${actind4quiz === 3 || isAnswerSelected(activeIndex) === "C" ? "bg-green-400 text-gray-800" : ""} text-white`}>
                                {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.opationC : 'No question available'}
                            </h2>
                            <h2 onClick={() => handleChooseAnserw(4)} className={`mb-7 cursor-pointer font-arabicUI3 text-4xl m-3 p-4 rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-gray-800 ${actind4quiz === 4 || isAnswerSelected(activeIndex) === "D" ? "bg-green-400 text-gray-800" : ""} text-white`}>
                                {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.opationD : 'No question available'}
                            </h2>
                        </div>
                        <div className='flex'>
                            <h2 onClick={() => {
                                if (activeIndex < enrolquiz?.question?.length - 1) {
                                    setActiveINdex(activeIndex + 1);
                                    setActive4quiz(0);
                                } else {
                                    setNext(true);
                                }
                            }} className={`mb-7 cursor-pointer w-fit font-arabicUI3 text-5xl m-3 p-8 mx-auto rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-white text-gray-800`}>
                                {!next ? "السوال التالي" : "الأسئلة خلصت"}
                            </h2>

                            {next && (
                                <h4 className={`mb-7 cursor-pointer w-fit font-arabicUI3 text-5xl m-3 p-8 mx-auto rounded-lg text-center hover:bg-white/40 duration-500 transition active:ring-4 select-none bg-green-400 text-gray-800`}>
                                    تسليم الامتحان
                                </h4>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizData;
