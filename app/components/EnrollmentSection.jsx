import React from 'react'
import { FaBookOpenReader } from "react-icons/fa6";

const EnrollmentSection = ({ courseInfo }) => {
    return (
        <div>
            {courseInfo.isfree ?
                (<div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 from-green-400 to-green-500 rounded-2xl `}>

                    <h2 className='  flex justify-center m-auto  font-arabicUI3 bg-white p-5 text-green-500/90 rounded-2xl text-5xl'> انضم دلوقتي </h2>

                    <h4 className=' text-white m-auto flex justify-center text-4xl my-4 '>الكورس مجاني</h4>


                </div>) :

                (
                    <div className={`   h-fit max-sm:w-fit  bg-gradient-to-tr shadow-2xl max-sm:mx-0 p-5 m-5 from-green-400 to-green-500 rounded-2xl `}>

                        <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl'>

                            <span className=' p-6 rounded-2xl text-green-500 block w-full bg-white m-auto text-center'>اشترك دلوقتي</span>

                        </h2>
                        <h2 className=' text-white flex justify-center m-auto  font-arabicUI3 text-5xl my-5'>
                            <span>جنيه</span>
                            {courseInfo.price}بـــ


                        </h2>


                    </div>
                )
            }
        </div>
    )
}

export default EnrollmentSection