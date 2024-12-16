'use client'
import React, { act, useEffect, useState } from 'react'
import GlobalApi from '../../api/GlobalApi'
import { FaLock } from "react-icons/fa6";
import EnrollmentSection from '../../components/EnrollmentSection';
import { FaPlay } from "react-icons/fa";
import { useUser } from '@clerk/nextjs';



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




    const { user } = useUser()
    const [EnrollDAta, setEnrollData] = useState([])
    console.log(user?.primaryEmailAddress?.emailAddress)
    useEffect(() => {
        user?.primaryEmailAddress?.emailAddress && EnrooolUser(user?.primaryEmailAddress?.emailAddress)
    }, [user?.primaryEmailAddress?.emailAddress])

    const EnrooolUser = () => {
        GlobalApi.EnrollmentUsers(user?.primaryEmailAddress?.emailAddress).then(res => {
            console.log(res.userEnrolls[0])
            setEnrollData(res.userEnrolls)
        })
    }

    console.log(courseInfo)
    console.log(courseInfo.price)



    const filteredcourse = EnrollDAta.filter(item => item?.course?.nicknameforcourse === courseInfo.nicknameforcourse)
    console.log("this:", filteredcourse)
    const isCourseFound = filteredcourse.length > 0;

    const handlechapterClick = (index) => {
        setActiveIndex(index)
    }



    return (

        <div className=' font-arabicUI bg-brain-image rounded-xl shadow-2xl shadow-white/15 p-5'>
            <div className={`  h-fit max-sm:w-fit  outline-dashed outline-2 outline-white  backdrop-blur-2xl bg-gradient-to-l shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl `}>
                <h3 className=' leading-relaxed max-sm:text-3xl text-5xl text-right  text-white '>{courseInfo.nameofcourse} </h3>
                <p className=' my-10 font-arabicUI3 max-sm:text-lg text-2xl whitespace-pre-wrap text-white/90 text-right'>{courseInfo.description}</p>
            </div>

            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 grid-cols-3'>
                <div>
                    <div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl  outline-dashed outline-2 outline-white bg-white/10 backdrop-blur-3xl`}>
                        <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl max-xl:text-3xl'>محتوي الكورس</h2>


                        {isCourseFound ? (
                            courseVideoChapters.map((item, index) => (
                                <div onClick={() => handlechapterClick(index)} key={index} className=' hover:scale-105 hover:bg-white  bg-slate-700  relative duration-500 cursor-pointer  rounded-lg my-5 text-right '>
                                    <h2 className={`  hover:text-slate-700 duration-500 text-white text-3xl max-xl:text-2xl p-5  ${activeIndex == index && "bg-green-500 hover:bg-white hover:text-green-500 rounded-lg"} `}>
                                        <span className=' absolute left-5'>
                                            {isCourseFound ? (
                                                <FaPlay />
                                            ) : (
                                                activeIndex == index ? <FaPlay /> : <FaLock />
                                            )}
                                        </span>{item.nameofchapter}  </h2>
                                </div>
                            ))


                        ) : (
                            courseVideoChapters.map((item, index) => (
                                <div onClick={() => handlechapterClick(0)} key={index} className=' hover:scale-105 hover:bg-white  bg-slate-700  relative duration-500 cursor-pointer  rounded-lg my-5 text-right '>
                                    <h2 className={`  hover:text-slate-700 duration-500 text-white text-3xl max-xl:text-2xl p-5  ${activeIndex == index && "bg-green-500 hover:bg-white hover:text-green-500 rounded-lg"} `}>
                                        <span className=' absolute left-5'>
                                            {isCourseFound ? (
                                                <FaPlay />
                                            ) : (
                                                activeIndex == index ? <FaPlay /> : <FaLock />
                                            )}
                                        </span>{item.nameofchapter}  </h2>
                                </div>
                            ))

                        )


                        }
                    </div>
                    <EnrollmentSection courseInfo={courseInfo}></EnrollmentSection>
                </div>



                <div className={`  h-fit max-sm:w-fit  col-span-2 bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl  outline-dashed outline-2 outline-white backdrop-blur-2xl`}>
                    <div>
                        <h3 className=' text-right mb-8 text-4xl text-white'>{courseVideoChapters[activeIndex]?.nameofchapter}</h3>

                        {courseVideoChapters[activeIndex]?.chaptervideo?.url ? (

                            <video width={1000}  controlsList="nodownload"  poster='/brain.jpeg' key={courseVideoChapters[activeIndex]?.chaptervideo?.url} className=' my-6 rounded-2xl shadow-black/40 shadow-xl' height={500} controls>
                                <source  type='video/mp4' src={courseVideoChapters[activeIndex]?.chaptervideo?.url} />
                            </video>

                        ) : null}
                    </div>


                </div>

            </div>

        </div>
    )
}

export default page