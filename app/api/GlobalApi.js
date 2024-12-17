import request, { gql } from "graphql-request"

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm482x6a502j207w6ujty7gg4/master"

const getAllCourseList = async () => {
  const query = gql`
    
    query MyQuery {
  courses {
    description
    id
    isfree
    nameofcourse
    price
    color    
    nicknameforcourse

  }
}

    `

  const result = await request(MASTER_URL, query)
  return result
}
const getcourseinfo = async (courseid) => {
  const query2 = gql`
    query MyQuery {
  course(where: {nicknameforcourse: "`+ courseid + `"}) {
    nameofcourse
    price
    description
    color
    isfree
    nicknameforcourse
     quiz {
        id
        quiztitle
        question {
          opationA
          opationB
          opationD
          opationC
          qus
        }
      }
   chapterMood {
      chaptervideo {
        url
        fileName
      }
       nameofchapter


    }
  }
}`

  const result2 = await request(MASTER_URL, query2)
  return result2

}

const sendEnrollData = async (courseid, userEmail, phonenumber) => {
  const query3 = gql`
  
  mutation MyMutation {
  createUserEnroll(
    data: {course: {connect: {nicknameforcourse: "`+ courseid + `"}}, isHePaid: false, userEmail: "` + userEmail + `", courseid: "` + courseid + `", phonenumber: "` + phonenumber + `"}
  ) {
    id
    course {
      nameofcourse
    }
    stage
  }
     publishManyUserEnrollsConnection(where: {}) {
    edges {
      node {
        id
      }
    }
  }
}
  
  `


  const result3 = await request(MASTER_URL, query3)
  return result3
}

const EnrollmentUsers = async (userEmail) => {
  const query4 = gql`
  query MyQuery {
  userEnrolls(where: {userEmail: "`+ userEmail + `", isHePaid: true}) {
    isHePaid
    phonenumber
    id
    courseid
    userEmail
    course {
      nameofcourse
      nicknameforcourse
      price
      color
      dataofcourse
      description
      isfree
      
    }
  }
}
  `

  const result4 = await request(MASTER_URL, query4)
  return result4;
}

export default {
  getAllCourseList,
  getcourseinfo,
  sendEnrollData,
  EnrollmentUsers
}