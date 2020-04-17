import React from 'react'
import {SellerSection,HeaderContainer,CardContainer} from './styledBestSellers'
import Cards from '../Common/Cards/Cards'
const bestSellers = ({images}) => {
  return (
    <SellerSection>
      <HeaderContainer>
      <h1>Los mas vendidos</h1>
      </HeaderContainer>
      <CardContainer>
      <Cards/>
      <Cards/>
      <Cards/>
      </CardContainer>
     
    </SellerSection>
  )
}

export default bestSellers
