'use client'



import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import GlobalApi from '../api/GlobalApi';
import Link from 'next/link';

const Courses = () => {


    const [datacourse, setdatacourse] = useState([])


    useEffect(() => {
        getallcoures()
    }, [])



    const getallcoures = () => {
        GlobalApi.getAllCourseList().then(res => {
            console.log(res.courses)
            setdatacourse(res.courses)
        })
    }


    return (
        <div className=' flex justify-start m-auto '>
            <div>
                <div>
                    <div className=' max-sm:justify-start  flex justify-end my-16'>
                        <h3 className='  max-md:text-5xl flex text-6xl dark:text-white text-slate-800'><span className=' mx-4'><FaBookmark />
                        </span>الكورسات</h3>
                    </div>
                </div>
                <div className=' grid-cols-3  max-xl:grid-cols-2 max-md:grid-cols-1 grid rtl-grid container'>
                    {datacourse.map((item, index) => (
                        <div key={index} className={` hover:scale-110  hover:duration-700 h-fit max-sm:w-fit  bg-gradient-to-br shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl 
                         ${item.color === "green" && "shadow-green-500/70 from-green-500 to-green-300 "}
                         ${item.color === "red" && "shadow-red-500/70 from-red-500 to-red-300 "}
                         ${item.color === "orange" && "shadow-orange-500/70 from-orange-500 to-orange-300 "}
                         ${item.color === "slate" && "shadow-slate-500/70 from-slate-500 to-slate-300 "}
                         ${item.color === "blue" && "shadow-blue-500/70 from-blue-500 to-blue-300 "}`}>
                            <h3 className=' text-white text-3xl max-md:text-5xl max-md:leading-relaxed  leading-relaxed flex text-right '>{item?.nameofcourse}</h3>
                            <p className={`whitespace-pre-line drop-shadow-xl leading-relaxed text max-md:text-xl  text-right mt-6 text-lg font-arabicUI3
                                 ${item.color === "red" && "text-red-800"}
                                 ${item.color === "orange" && "text-orange-800"}
                                 ${item.color === "green" && "text-green-800"}
                                 ${item.color === "slate" && "text-slate-800"}
                                 ${item.color === "blue" && "text-blue-800"}
                                  `} >
                                {item?.description}
                            </p>
                            <Link href={`/${item?.nicknameforcourse}`} >
                                <div className={`   shadow-xl font-arabicUI2 w-fit max-2xl:text-4xl max-lg:text-3xl text-5xl m-auto flex justify-center p-4 bg-white rounded-2xl my-4     
                                 ${item.color === "red" && "text-red-500 shadow-red-400"}
                                 ${item.color === "orange" && "text-orange-500 shadow-orange-400"}
                                 ${item.color === "green" && "text-green-500 shadow-green-400"}
                                 ${item.color === "slate" && "text-slate-500 shadow-slate-400"}
                                 ${item.color === "blue" && "text-blue-500 shadow-blue-400"}
                                 outline-dashed outline-4 outline-offset-4 max-md:text-3xl  max-md:mt-5 hover:scale-110  duration-500 `}   >مشاهده الكورس</div>
                                {!item.isfree ?
                                    <h1 className=' text-5xl rounded-lg  drop-shadow-2xl  text-white justify-center flex p-4 m-auto  font-arabicUI3'>
                                        <span>{item.price}</span>جنيه</h1> :
                                    <h1 className=' text-5xl rounded-lg  drop-shadow-2xl  text-white justify-center flex p-4 m-auto  font-arabicUI3'>
                                        مجانا</h1>
                                }
                            </Link></div>
                          ))}
            </div>
        </div>
        </div >
    )
}

export default Courses