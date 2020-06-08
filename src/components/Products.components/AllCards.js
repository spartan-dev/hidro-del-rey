import React from "react"
import Card from "../Common/Cards/Cards"
import {AllCardsContainer} from './productsStyles'
//import Img from "gatsby-image"
import compoCards from "./Composition"
const AllCards = ({ images }) => { 
  return (
     <AllCardsContainer  className="
     uk-grid-match  
     uk-grid-column-small
     uk-grid-row-medium
     uk-child-width-1-3@s 
     uk-text-center
     uk-flex-wrap
     uk-flex
     "

     >
       {compoCards.length ? (compoCards.map((item,index) => {
         return (
           <Card
            key={index}
            title={item.title}
            text={item.text}
            bottles
            id={item.id}
            image={item.img}
            price24={item.price24}
            price12={item.price12}
            showButtons
           />
         )
       })) 
       :
       (<div><h1>Estamos trabajando!!</h1>
        <span uk-spinner="ratio: 4.5"></span> </div>)}
    </AllCardsContainer>
      
  
  )
}

export default AllCards
