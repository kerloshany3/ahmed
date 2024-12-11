import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const Hero = () => {
    return (
        <div>
            <div className=" flex justify-between">

                <div className=" flex justify-end">

                    <img src="/imageAhmed.png" width={600} height={200} className=' drop-shadow-2xl'></img>


                </div>

                <div className=" ">

                    <h2 className=" flex justify-end  my-10 text-6xl text-red-500">
                        .. احمد السيد
                        <span className=" dark:text-slate-400 text-slate-950">
                            <span className=" text-4xl">/</span>
                            د
                        </span>
                    </h2>

                    <div className=''>
                        <h1 className=' dark:text-slate-400 text-5xl my-4 flex justify-end'>
                            <span className='font-abril text-7xl -mt-3 mr-3 text-red-500 flex justify-start'>2025</span>
                            يرحب بدفعه </h1>

                        <h1 className=' dark:text-slate-400 text-5xl'>لشرح منهج <span className=' hover:scale-90 duration-300 text-red-600'>
                            الاحياء
                        </span>

                            <span className=' dark:text-yellow-400 text-slate-800'>
                                والجيولوجيا
                            </span>
                        </h1>

                        <h3 className=' text-5xl flex justify-end  text-yellow-500 hover:scale-110 duration-300 my-20 font-rakkas'> <span>
                        <FaLightbulb />
                        </span> ❝ لو طريقك صعب اعرف ان النهاية حلوة ❞ </h3>
                      

                    </div>

                    <div className='  shadow-2xl shadow-yellow-400 rounded-xl bg-yellow-400 p-4  w-fit  '>
                        <div className=' absolute bg-black  dark:bg-yellow-300 drop-shadow-2xl  right-28 bottom-24 w-7 h-7 rounded-full'></div>
                        <h2 className=' flex text-4xl text-black justify-end 3'> <span className='text-5xl'><GiTakeMyMoney /></span> 
                         خصم علي كورس التكاثر الان</h2>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Hero