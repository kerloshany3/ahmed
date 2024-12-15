'use client'
import React, { act, useEffect, useState } from 'react'
import GlobalApi from '../api/GlobalApi'
import { FaLock } from "react-icons/fa6";
import EnrollmentSection from '../components/EnrollmentSection';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
  

const page = ({ params }) => {
    const { courseid } = React.use(params); // Retrieve parameters from the route

    const [courseInfo, setCourseInfo] = useState([])
    const [courseVideoChapters, setcourseVideoChapters] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        courseid ? getallcoures(courseid) : null

    }, [courseid])


    const getallcoures = () => {
        GlobalApi.getcourseinfo(courseid).then(res => {
            console.log(res.course.chapterMood)
            setCourseInfo(res.course)
            setcourseVideoChapters(res.course.chapterMood)
        })
    }
    console.log(courseVideoChapters[2]?.chaptervideo?.url)



    return (

        <div className=' font-arabicUI'>
            <div className={`  h-fit max-sm:w-fit  bg-gradient-to-l shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl 
                         ${courseInfo.color === "green" && "shadow-green-500/70 from-green-500 to-green-400 "}
                         ${courseInfo.color === "red" && "shadow-red-500/70 from-red-500 to-red-400 "}
                         ${courseInfo.color === "orange" && "shadow-orange-500/70 from-orange-500 to-orange-400 "}
                         ${courseInfo.color === "slate" && "shadow-slate-500/70 from-slate-500 to-slate-400 "}
                         ${courseInfo.color === "blue" && "shadow-blue-500/70 from-blue-500 to-blue-400 "}`}>






                <h3 className=' text-5xl text-right  text-slate-800 '>{courseInfo.nameofcourse} </h3>

                <p className=' my-10 font-arabicUI3 text-2xl whitespace-pre-wrap text-right'>{courseInfo.description}</p>



            </div>

            <div className='grid grid-cols-3'>

                <div>
                    <div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl 
                         ${courseInfo.color === "green" && "shadow-green-500/70 from-green-500 to-green-400 "}
                         ${courseInfo.color === "red" && "shadow-red-500/70 from-red-500 to-red-400 "}
                         ${courseInfo.color === "orange" && "shadow-orange-500/70 from-orange-500 to-orange-400 "}
                         ${courseInfo.color === "slate" && "shadow-slate-500/70 from-slate-500 to-slate-400 "}
                         ${courseInfo.color === "blue" && "shadow-blue-500/70 from-blue-500 to-blue-400 "}`}>

                        <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl'>محتوي الكورس</h2>


                        {courseVideoChapters.map((item, index) => (

                            <div key={index} className=' hover:scale-105 hover:bg-white  bg-slate-700  relative duration-500 cursor-pointer  rounded-lg my-5 text-right '>  
                                <h2 className={` hover:text-slate-700 duration-500  text-white text-3xl p-5  ${activeIndex == index && "bg-green-500 hover:bg-white hover:text-green-500 rounded-lg"} `}>
                                    <span className=' absolute left-5'>
                                     {activeIndex == index ? <FaPlay /> :    <FaLock /> }
                                     
                                    </span>{item.nameofchapter}  </h2>
                            </div>
                        ))}

                        <SignInButton></SignInButton>

                    </div>



                    <EnrollmentSection courseInfo={courseInfo}></EnrollmentSection>


                </div>



                <div className={`  h-fit max-sm:w-fit  col-span-2 bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl 
                         ${courseInfo.color === "green" && "shadow-green-500/70 from-green-500 to-green-400 "}
                         ${courseInfo.color === "red" && "shadow-red-500/70 from-red-500 to-red-400 "}
                         ${courseInfo.color === "orange" && "shadow-orange-500/70 from-orange-500 to-orange-400 "}
                         ${courseInfo.color === "slate" && "shadow-slate-500/70 from-slate-500 to-slate-400 "}
                         ${courseInfo.color === "blue" && "shadow-blue-500/70 from-blue-500 to-blue-400 "}`}>
                    <div>
                        <h3 className=' text-right text-4xl text-slate-800'>{courseVideoChapters[0]?.nameofchapter}</h3>

                        {courseVideoChapters[0]?.chaptervideo?.url ? (

                            <video width={1000} className=' my-6 rounded-2xl shadow-black shadow-xl' height={500} controls>
                                <source type='video/mp4' src={courseVideoChapters[0]?.chaptervideo?.url} />
                            </video>

                        ) : null}
                    </div>


                </div>

            </div>

        </div>
    )
}

export default page