'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../api/GlobalApi'

const page = () => {
    const { user } = useUser()


    const [dataofuser, setdataofuser] = useState([])

    console.log(user?.primaryEmailAddress?.emailAddress)

    useEffect(() => {
        user?.primaryEmailAddress?.emailAddress && EnrooolUser(user?.primaryEmailAddress?.emailAddress)
    }, [user?.primaryEmailAddress?.emailAddress])



    const EnrooolUser = () => {
        GlobalApi.EnrollmentUsers(user?.primaryEmailAddress?.emailAddress).then(res => {
            console.log(res)
        })
    }





    return (
        <div>page</div>
    )
}

export default page