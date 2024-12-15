'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import PaymentDetils from '../../components/PaymentDetils';
import GlobalApi from '@/app/api/GlobalApi';

const Page = ({ params }) => {
    const { idpay } = React.use(params);
    const [courseInfo, setCourseInfo] = useState([])
    useEffect(() => {
        idpay ? getallcoures(idpay) : null

    }, [idpay])


    const getallcoures = () => {
        GlobalApi.getcourseinfo(idpay).then(res => {
            console.log(res.course)
            setCourseInfo(res.course)

        })
    }

    const { user } = useUser(); // Use the hook correctly to get the user object


    useEffect(() => {
        if (user) {
            console.log(user.username); // Log the username if user exists
        }
    }, [user]); // Add user as a dependency to useEffect

    console.log(idpay)
    return (

        /*    
            {user.username || user.firstName || "User"}      
            {user.firstName || "User"}
            {user.fullName || "User"}
            {user.primaryEmailAddress.emailAddress || "User"}
            {user.id || user.firstName || "User"}
       
            */
        <div className=' text-white text-5xl font-abril mt-7'>
            {user ? (<>

                <div className='w-1/2 m-auto bg-custom-image p-6 bg-cover rounded-xl shadow-2xl shadow-red-900/30'>
                    <h1 className='  m-auto flex justify-center font-arabicUI3'>مرحبا بك فبوابه الدفع</h1>

                    <div className='   mt-6  rounded-tr-2xl grid grid-cols-2 '>

                        <div className='border  backdrop-blur-xl rounded-tl-xl'>
                            <h1 className='  text-4xl place-items-center mr-0 flex justify-center font-arabicUI3 mt-4'>  {user.firstName}</h1>

                        </div>
                        <div className=' border  flex place-items-center rounded-tr-xl  backdrop-blur-xl '>
                            <h1 className='   place-items-center py-4 text-4xl m-auto flex justify-center font-arabicUI3 -mt-1 '>  الاسم</h1>

                        </div>

                    </div>
                    <div className='  backdrop-blur-lg  grid grid-cols-2 '>

                        <div className='border rounded-bl-2xl '>
                            <h1 className='  text-2xl place-items-center mr-0 flex justify-center font-arabicUI3 m-2'>  {user.primaryEmailAddress.emailAddress}</h1>

                        </div>
                        <div className=' border flex place-items-center rounded-br-xl'>
                            <h1 className='   place-items-center text-3xl m-auto flex  font-arabicUI3 justify-end text-right '>  الايميل</h1>

                        </div>

                    </div>

                    <div className='backdrop-blur-lg p-5 border mt-5 rounded-2xl'>
                        <h1 className='  m-auto mt-6 flex justify-center font-arabicUI3 place-items-center'><span className=' '>فودافون كاش</span> &nbsp; وسيلة الدفع </h1>
                        <h1 className='  m-auto mt-6 flex justify-center font-arabicUI3 place-items-center'> حول علي الرقم ده </h1>
                        <h1 className='  m-auto mt-6 flex justify-center font-arabicUI3 place-items-center'> 01080506463</h1>
                        <h1 className='  m-auto mt-6 flex justify-center font-arabicUI3 bg-black/15 border shadow-2xl shadow-white/20 p-4 rounded-xl w-fit place-items-center'> مبلغ : {courseInfo.price} جنيه</h1>
                        <h1 className='  m-auto mt-6 flex justify-center font-arabicUI3 bg-black/15 border shadow-2xl shadow-white/20 p-2 rounded-xl w-fit text-center leading-relaxed place-items-center'>{courseInfo.nameofcourse}</h1>

                        <div className=' m-auto mt-6 rounded-xl justify-center font-arabicUI3 bg-black/15 border shadow-2xl shadow-white/20'>
                            <h1 className='  p-2 rounded-xl w-fit text-center leading-relaxed place-items-center'>بعد متحول ابعت الرقم اللي حولت منه </h1>
                            <input type="number" maxLength="12"  size="12" className=' my-5 p-2 rounded-lg w-4/5 flex justify-center m-auto text-black' />
                        </div>





                    </div>
                </div> </>) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default Page;
