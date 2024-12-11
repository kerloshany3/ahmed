'use client'
import React, { useEffect }  from 'react'
import GlobalApi from '../api/GlobalApi'
const page = () => {


    useEffect(() => {
        getallcoures()
    }, [])
    
    
    
      const getallcoures = () => {
        GlobalApi.getAllCourseList().then(res => {
          console.log(res)
        })
      } 


 

    return (


        <div>page : </div>
    )
}

export default page