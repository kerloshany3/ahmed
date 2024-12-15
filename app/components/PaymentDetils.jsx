'use client'
import React, { useEffect, useState } from 'react'

const PaymentDetils = ({ courseInfo }) => {

    { courseInfo && console.log(courseInfo.price) }

    const [CourseDetils,setCourseDetils] = useState(null)

    useEffect(() => {
        if (courseInfo) {
            setCourseDetils(courseInfo);
        }
    }, [courseInfo]);
    

    return (
        <div>
            {CourseDetils ? (
                <div>
                    <h1 className="m-auto mt-6 flex justify-center font-arabicUI3 place-items-center">
                        {CourseDetils.price}
                    </h1>
                </div>
            ) : (
                <h2>loading</h2>
            )}
        </div>
    )
}

export default PaymentDetils