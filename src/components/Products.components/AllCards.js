import React from 'react'
import Card from "../Common/Cards/Cards"
import { useStaticQuery, graphql} from "gatsby"

const AllCards = () => {
  const data = useStaticQuery(graphql`
  query{
    allFile(filter: {relativeDirectory: {eq: "galery"}}) {
    edges {
      node {
        childImageSharp {
          fixed(width: 300, height: 400) {
            originalName
          }
        }
      }
    }
  }
  }
  `)
  const {edges} = data.allFile
  console.log(edges)
  return (
    <div>
      {Object.keys(edges).length ?(
          edges.map((item,i) => {
            return(
             <div>Si pasa el item</div>
            )
          })
      ):(<div>Loading</div>)}
    </div>
  )
}

export default AllCards
