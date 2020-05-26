import React from 'react'
import {SellerSection,HeaderContainer,CardContainer} from './styledBestSellers'
import Cards from '../Common/Cards/Cards'
import compoCards from '../Products.components/Composition'
//images
import Prod1 from '../../images/galery/01acre.jpg'
import Prod2 from '../../images/galery/02aureum.jpg'
import Prod3 from '../../images/galery/03berserker.jpg'
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
