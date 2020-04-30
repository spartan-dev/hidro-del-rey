import React, { useEffect } from "react"
import Card from "../Common/Cards/Cards"
import Img from "gatsby-image"
import compoCards from "./Composition"
const AllCards = ({ images }) => {
  let compose
  useEffect(() => {
    componer(compoCards, images)
     //superCard = [...compoCards, ...images]
    return () => {
      console.log("all clear")
    }
  }, [])
  // console.log(compoCards)
  // console.log(images)
  const  componer = (data, view) => {
    console.log(data, view)
    
      compose = data.map(item => {
        view.forEach(img => {
        return <div>{item.title}
        <Img fixed={img.node.childImageSharp.fixed}/>
        </div>
        })
        
      })
      return compose
   }
  
 

  console.log(compose, "respuesta")

  return (
    function(){
     return <div>
      <h1>estamos trabajando en ello</h1>
      <span uk-spinner="ratio: 4.5"></span>
      {compose}
      {/* {compoCards.length ? (compoCards.map(item =>{
        images.map(img => {
          return (<div>
            {item.title}
            <Img fixed = {img.node.childImageSharp.fixed}/>
          </div>)
        })
      })):(<span uk-spinner="ratio: 4.5"></span>)} */}
      
    </div>
    }
  
  )
}

export default AllCards
