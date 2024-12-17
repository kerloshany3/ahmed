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

    const handleClickNumber = (index) => {
        setActiveINdex(index)
    }
    // Function to fetch quiz data
    const quizdata = (email, quizId) => {
        GlobalApi.getQuizDataWithEnroll(email, quizId).then((req) => {
            console.log(req) // Log the response
            console.log(req.userEnrolls[0].course.quiz[0]) // Log the response
            setEnrolQuiz(req.userEnrolls[0].course.quiz[0]) // Log the response
            // Save quiz data to state
        })
    }

    useEffect(() => {
        if (email && quizid) {
            quizdata(email, quizid)
        }
    }, [user, quizid]) // Make sure to re-run effect when either user or quizid changes



    return (
        <div>
            <div className=' bg-blod2-image cursor-default bg-cover rounded-xl p-8 m-4'>


                <div className=' backdrop-blur-2xl  p-3 px-8 rounded-xl  outline-dashed outline-white outline-2 '>,
                    <div className=' flex justify-end'>
                        <h4 className=' text-right font-arabicUI3 text-6xl bg-white/10 p-4 w-fit rounded-md justify-start flex text-white'><BiSolidPencil />  {enrolquiz.quiztitle}</h4>

                    </div>

                    <div>
                        <div className=' mt-10  grid grid-cols-11 max-md:grid-cols-4 max-sm:grid-cols-3 max-lg:grid-cols-5 max-xl:grid-cols-7 gap-3'>
                            {enrolquiz?.question?.map((item, index) => (

                                <h2 onClick={() => handleClickNumber(index)} className={` mb-7 cursor-pointer font-arabicUI3 text-4xl p-4  rounded-lg text-center hover:bg-white/40 duration-500  transition active:ring-4 select-none  ${activeIndex == index ? " bg-gray-800 text-white scale-125  mx-4" : "bg-white text-gray-800 "}`} key={index}>
                                    {index + 1}</h2>
                            ))}
                        </div>


                        <h2 className={`mb-7 cursor-pointer font-arabicUI3 text-4xl p-4 rounded-lg text-center hover:bg-white/40  duration-500 transition active:ring-4 select-none bg-white text-gray-800`}>
                            {enrolquiz?.question && enrolquiz?.question[activeIndex] ? enrolquiz?.question[activeIndex]?.qus : 'No question available'}
                        </h2>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default QuizData