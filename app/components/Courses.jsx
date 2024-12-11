'use client'



import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import GlobalApi from '../api/GlobalApi';

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
        <div>
            <div>
                <div>
                    <div className='  flex justify-end my-16'>
                        <h3 className=' flex text-6xl dark:text-white text-slate-800'><span className=' mx-4'><FaBookmark />
                        </span>الكورسات</h3>
                    </div>
                </div>
                <div className=' grid-cols-3 grid rtl-grid container'>
                    {datacourse.map((item, index) => (
                        <div key={index} className={` h-fit bg-gradient-to-br shadow-2xl  p-5 m-5 rounded-2xl 
                         ${item.color === "green" && "shadow-green-500/70 from-green-500 to-green-300 "}
                         ${item.color === "red" && "shadow-red-500/70 from-red-500 to-red-300 "}
                         ${item.color === "orange" && "shadow-orange-500/70 from-orange-500 to-orange-300 "}
                         ${item.color === "slate" && "shadow-slate-500/70 from-slate-500 to-slate-300 "}
                         ${item.color === "blue" && "shadow-blue-500/70 from-blue-500 to-blue-300 "}`}>
                            <h3 className=' text-white text-5xl flex text-right leading-relaxed'>{item?.nameofcourse}</h3>
                            <p className={`whitespace-pre-line drop-shadow-xl leading-relaxed text  text-right mt-6 text-2xl font-arabicUI3
                                 ${item.color === "red" && "text-red-800"}
                                 ${item.color === "orange" && "text-orange-800"}
                                 ${item.color === "green" && "text-green-800"}
                                 ${item.color === "slate" && "text-slate-800"}
                                 ${item.color === "blue" && "text-blue-800"}
                                  `} >
                                {item?.description}
                            </p>
                            <button className={`   shadow-xl font-arabicUI2 w-fit text-5xl m-auto flex justify-center p-4 bg-white rounded-2xl my-4     
                                 ${item.color === "red" && "text-red-500 shadow-red-400"}
                                 ${item.color === "orange" && "text-orange-500 shadow-orange-400"}
                                 ${item.color === "green" && "text-green-500 shadow-green-400"}
                                 ${item.color === "slate" && "text-slate-500 shadow-slate-400"}
                                 ${item.color === "blue" && "text-blue-500 shadow-blue-400"}
                                 outline-dashed outline-4 outline-offset-4 `} >مشاهده الكورس</button>

                            <h1 className=' text-5xl rounded-lg  drop-shadow-2xl  text-white justify-center flex p-4 m-auto  font-arabicUI3'><span>{item.price}</span>جنيه</h1>

                        </div>))}



                    
                </div>
            </div>
        </div>
    )
}

export default Courses