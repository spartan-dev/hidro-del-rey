import React from "react"
import Card from "../Common/Cards/Cards"
import {AllCardsContainer} from './productsStyles'
//import Img from "gatsby-image"
import compoCards from "./Composition"
const AllCards = ({ images }) => { 
  return (
     <AllCardsContainer>
       {compoCards.length ? (compoCards.map((item,index) => {
         return (
           <Card
           key={index}
            title={item.title}
            text={item.text}
            bottles
            image={item.img}
            price={item.price}
            showButtons
           />
         )
       })) 
       :
       (<div><h1>Estamos trabajando en ello</h1>
        <span uk-spinner="ratio: 4.5"></span> </div>)}
    </AllCardsContainer>
      
  
  )
}

export default AllCards
