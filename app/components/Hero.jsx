import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const Hero = () => {
    return (
        <div>
            <div className=" select-none relative flex justify-between">


                <img className=' absolute  -top-96 flex inset-0 rotate-45 -z-20 -left-80 ' width={2000} src='/dna.svg' alt="" />
                <div className=" flex justify-end">

                    <img src="/imageAhmed.png" width={600} height={200} className=' drop-shadow-2xl  max-md:hidden'></img>


                </div>

                <div className=" font-arabicUI3 ">

                    <h2 className=" leading-normal flex justify-end max-md:mr-7 max-md:text-4xl  my-10 text-6xl text-red-500">
                        .. احمد السيد
                        <span className=" dark:text-slate-400 text-slate-950">
                            <span className=" text-4xl">/</span>
                            د
                        </span>
                    </h2>

                    <img src="/imageAhmed.png" width={500} height={200} className=' drop-shadow-2xl hidden max-md:block '></img>


                    <div className=''>
                        <h1 className=' max-md:text-4xl  max-md:mr-7 dark:text-slate-400 text-5xl my-4 flex justify-end'>
                            <span className='  max-md:text-5xl max-md:mt-1 text-7xl -mt-3 mr-3 text-red-500 flex justify-start'>2025</span>
                            يرحب بدفعه </h1>

                        <h1 className='  text-right leading-relaxed max-md:mr-6 dark:text-slate-400 max-md:leading-relaxed max-md:text-right text-5xl'>لشرح منهج <span className=' hover:scale-90 duration-300 text-red-600'>
                            الاحياء
                        </span>

                            <span className=' dark:text-yellow-400 text-slate-800'>
                                والجيولوجيا
                            </span>
                        </h1>

                        <h3 className=' text-5xl flex justify-end  text-yellow-500 hover:scale-110 duration-300 my-10 font-rakkas'> <span>
                            <FaLightbulb />
                        </span> ❝ لو طريقك صعب اعرف ان النهاية حلوة ❞ </h3>


                    </div>

                    <div className='  flex m-auto shadow-2xl shadow-yellow-400 rounded-xl bg-yellow-400 p-4  w-fit  '>
                        <h2 className=' flex max-md:text-xl max-md:h-fit  text-4xl text-slate-950 justify-end 3'> <span className='text-5xl'><GiTakeMyMoney /></span>
                            خصم علي كورس التكاثر الان</h2>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Hero