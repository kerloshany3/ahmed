import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const Content = () => {
    return (
        <div className=' mt-9   font-arabicUI3 text-center  cursor-default '>
            <div className=' bg-gradient-to-br from-red-500 to-red-600 max-md:w-fit max-md:scale-90 flex p-3 rounded-2xl  max-md:grid  shadow-xl shadow-red-500/50'>
                <div className='  transform transition-transform duration-300 hover:scale-105 max-md:w-fit w-1/3 bg-red-200 rounded-lg outline-dashed outline-red-200 outline-offset-4 h-36 max-md:h-fit flex justify-center p-5 m-6'>
                    <div className=' flex justify-center m-auto'>
                        <h4 className=' text-4xl gap-3 flex place-items-center text-red-500'><span className=' text-7xl'><FaBook />
                        </span>امتحانات اسبوعيه</h4>
                    </div>
                </div>
                <div className='  transform transition-transform duration-300 hover:scale-105  max-md:w-fit w-1/3   bg-red-200 rounded-lg outline-dashed outline-red-200 outline-offset-4 h-36 flex justify-center p-5 m-6'>
                    <div className='  flex justify-center m-auto'>
                        <h4 className=' text-4xl max-md:text-3xl gap-3 flex place-items-center text-red-500'><span className='  text-8xl'><FaStopwatch20 />
                        </span>عدد المشاهدات مفتوح</h4>
                    </div>
                </div>
                <div className='  transform transition-transform duration-300 hover:scale-105  max-md:w-fit w-1/3  bg-red-200 rounded-lg outline-dashed outline-red-200 outline-offset-4 h-36 flex justify-center p-5 m-6'>
                    <div className='  flex justify-center m-auto'>
                        <h4 className=' text-3xl  gap-3 flex place-items-center text-red-500'><span className=' text-8xl'><MdDeleteForever />
                        </span>لا يتم حذف المحتوي بعد وقت محدد</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content