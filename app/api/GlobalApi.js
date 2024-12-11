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
export default {
    getAllCourseList,
    getcourseinfo
}