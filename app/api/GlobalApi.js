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
  }
}

    `

    const result = await request(MASTER_URL, query)
    return result
}

export default {
    getAllCourseList
}