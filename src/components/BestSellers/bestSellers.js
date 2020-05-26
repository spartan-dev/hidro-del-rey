import React from 'react'
import {SellerSection,HeaderContainer,CardContainer} from './styledBestSellers'
import Cards from '../Common/Cards/Cards'
import compoCards from '../Products.components/Composition'
const BestSellers = () => {
  return (
    <SellerSection>
      <HeaderContainer>
      <h1>Los mas vendidos</h1>
      </HeaderContainer>
      <CardContainer>
        {compoCards.slice(0,3).map((item,idx) => {
          return(
            <Cards
            key={idx}
            id={item.id}
            title={item.title}
            text={item.text}
            bottles={true}
            qty={item.qty} 
            image={item.img}
            showButtons={true}
            price={item.price}
            />
          )
        })}

      </CardContainer>
     
    </SellerSection>
  )
}

export default BestSellers
