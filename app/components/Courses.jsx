'use client'



import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import GlobalApi from '../api/GlobalApi';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa";


const Courses = () => {


    const [datacourse, setdatacourse] = useState([])


    useEffect(() => {
        getallcoures()
    }, [])



    const getallcoures = () => {
        GlobalApi.getAllCourseList().then(res => {
            setdatacourse(res.courses)
        })
    }


    return (
        <div className=' flex justify-start m-auto max-sm:m-0 bg-brain-image cursor-default select-none bg-cover my-10 rounded-xl  p-5 '>
            <div>
                <div>
                    <div className=' max-sm:justify-start  flex justify-end my-16'>
                        <h3 className='  max-md:text-5xl flex text-6xl dark:text-white text-slate-800'><span className=' mx-4'><FaBookmark />
                        </span>الكورسات</h3>
                    </div>
                </div>
                <div className=' grid-cols-3  max-xl:grid-cols-2 max-md:grid-cols-1 grid rtl-grid container'>
                    {datacourse.map((item, index) => (
                        <div key={index} className={` hover:brightness-95 duration-500 hover:scale-110   hover:duration-700 h-fit max-sm:w-fit  bg-gradient-to-br shadow-2xl max-sm:mx-0 p-5 m-5 rounded-2xl 
                             backdrop-blur-3xl outline-white shadow-white/30 outline-dashed outline-2 bg-white/5   `}>
                            <Link href={`/Courses/${item?.nicknameforcourse}`} >
                                <h3 className='  text-white text-3xl  max-md:text-5xl max-md:leading-relaxed  leading-relaxed flex text-right '>{item?.nameofcourse}</h3>
                            </Link>
                            <p className={`whitespace-pre-line drop-shadow-2xl  leading-relaxed text max-md:text-xl  text-right mt-6 text-lg font-arabicUI3
                                text-white/80
                                  `} >
                                {item?.description}
                            </p>
                            <Link href={`/Courses/${item?.nicknameforcourse}`} >
                                <div className={`   shadow-xl font-arabicUI2 w-fit max-2xl:text-4xl max-lg:text-3xl text-4xl m-auto flex justify-center p-3 my-8 hover:bg-black/40 bg-white/10 rounded-xl      
                                 text-white
                                 outline-dashed outline-2 outline-offset-4 max-md:text-3xl  max-md:mt-5 hover:scale-110  duration-500 `}   > مشاهده الكورس <div className=' scale-90 mr-2'><FaPlay></FaPlay></div> </div>
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