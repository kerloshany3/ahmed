'use client'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import GlobalApi from '../api/GlobalApi';



const EnrollmentSection = ({ courseInfo }) => {

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

    return (
        <div>
            {courseInfo.isfree ?
                (<div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 from-green-400 to-green-500 rounded-2xl `}>

                    <h2 className='  flex justify-center m-auto  font-arabicUI3 bg-white p-5 text-green-500/90 rounded-2xl text-5xl'> انضم دلوقتي </h2>

                    <h4 className=' text-white m-auto flex justify-center text-4xl my-4 '>الكورس مجاني</h4>


                </div>) :

                (
                    <div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 from-green-400 to-green-500 rounded-2xl `}>

                        {user ? (
                            isCourseFound ? (
                                <h2 className=' text-white cursor-default flex justify-center m-auto  font-arabicUI3 text-5xl'>
                                    <span className=' p-6 rounded-2xl text-green-500 block w-full bg-white m-auto text-center'>
                                        {isCourseFound ? "تم الاشتراك" : "  اشترك دلوقتي"}
                                    </span>
                                </h2>
                            ) : (<Link href={`/payment/${courseInfo.nicknameforcourse}`} >
                                <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl'>
                                    <span className=' p-6 rounded-2xl text-green-500 block w-full bg-white m-auto text-center'>
                                        {isCourseFound ? "تم الاشتراك" : "  اشترك دلوقتي"}
                                    </span>
                                </h2>
                            </Link>)

                        ) : (

                            <Link href='/sign-in' >
                                <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl'>
                                    <span className=' p-6 rounded-2xl text-green-500 block w-full bg-white m-auto text-center'>اشترك دلوقتي</span>
                                </h2>
                            </Link>
                        )}




                        {filteredcourse ? null : (
                            <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl my-5'>
                                <span>جنيه</span>
                                {courseInfo.price}بـــ
                            </h2>

                        )}



                    </div>
                )
            }
        </div>
    )
}

export default EnrollmentSection