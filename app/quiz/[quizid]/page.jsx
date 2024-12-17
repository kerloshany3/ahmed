import React from 'react'

const page = ({ params }) => {
    
    const {quizid} = React.use(params)
  return (
    <div>{quizid}</div>
  )
}

export default page