import React from 'react'

const QuizV = () => {
    return (
        <div>
            <div className=' cursor-default backdrop-blur-xl rounded-xl w-fit m-auto outline-dashed outline-2 outline-white  p-5'>
                <h4 className=' m-auto flex justify-center font-arabicUI2 text-white text-5xl'>الكويزات اللي انت امتحنتها</h4>
            </div>

            < div className=' grid rtl-grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4'>
                {EnrollDAta.map((item) => (
                    <div key={item?.course?.nicknameforcourse} className=' m-5 h-fit backdrop-blur-2xl shadow-white/10 outline-dashed outline-white outline-2 shadow-xl  p-5 rounded-xl'>
                        <div className=''>
                            <h4 className=' font-arabicUI2 text-white text-4xl mb-4'>{item?.course?.nameofcourse}</h4>
                            <p className=' font-arabicUI3 text-white/80 text-sm'>{item?.course?.description}</p>
                            <div className=' text-white font-arabicUI2 my-4 text-3xl bg-white/10 p-2 w-fit rounded-xl outline-dashed outline-white outline-2 shadow-white/10 shadow-xl m-auto flex justify-center'>
                                <Link href={`/Courses/${item?.course?.nicknameforcourse}`}>
                                    <h1>فتح الكورس</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default QuizV