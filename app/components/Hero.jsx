import React from 'react'
import { FaLightbulb } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <div className=" flex justify-between">

                <div className=" flex justify-end">

                    <img src="/imageAhmed.png" width={600} height={200}></img>


                </div>

                <div className=" ">

                    <h2 className=" flex justify-end  my-10 text-6xl text-red-500">
                        .. احمد السيد
                        <span className=" text-slate-950">
                            <span className=" text-4xl">/</span>
                            د
                        </span>
                    </h2>

                    <div className=''>
                        <h1 className=' text-5xl my-4 flex justify-end'>
                            <span className='font-abril text-7xl -mt-3 mr-3 text-red-500 flex justify-start'>2025</span>
                            يرحب بدفعه </h1>

                        <h1 className='  text-5xl'>لشرح منهج <span className=' hover:scale-90 duration-300 text-red-600'>
                            الاحياء
                        </span>

                            <span className=' text-slate-800'>
                                والجيولوجيا
                            </span>
                        </h1>

                        <h3 className=' text-5xl flex justify-end  text-yellow-500 hover:scale-110 duration-300 my-20 font-rakkas'> <span>
                        <FaLightbulb />
                        </span> ❝ لو طريقك صعب اعرف ان النهاية حلوة ❞ </h3>
                      

                    </div>
                </div>




            </div>
        </div>
    )
}

export default Hero