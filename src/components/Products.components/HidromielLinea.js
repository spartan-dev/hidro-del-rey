import React from "react"
import Card from "../Common/Cards/Cards"
import { AllCardsContainer } from "./productsStyles"
import compoCards from "./Composition"

const HidroLinea = () => {
  const lineas = compoCards.filter(item => item.categoria == "linea")
  console.log(lineas)
  return (
    <AllCardsContainer  className="
    uk-grid-match  
    uk-grid-column-small
    uk-grid-row-medium
    uk-child-width-1-3@s 
    uk-text-center
    uk-flex-wrap
    uk-flex
    ">
      {lineas.length ? (lineas.map((item,idx) =>{
        return(
          <Card
          key={idx}
          image={item.img}
          title={item.title}
          text={item.text}
          bottles
          price24={item.price24}
          price12={item.price12}
          showButtons
        />
        )
      })
       
      ) : (
        <progress className="uk-progress" value="" max=""></progress>
      )}
    </AllCardsContainer>
  )
}

export default HidroLinea
