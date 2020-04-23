import React from 'react'
import {SellerSection,HeaderContainer,CardContainer} from './styledBestSellers'
import Cards from '../Common/Cards/Cards'
//images
import Prod1 from '../../images/galery/acre.jpg'
import Prod2 from '../../images/galery/aureum.jpg'
import Prod3 from '../../images/galery/berserker.jpg'
const BestSellers = () => {
  return (
    <SellerSection>
      <HeaderContainer>
      <h1>Los mas vendidos</h1>
      </HeaderContainer>
      <CardContainer>
      <Cards 
      title="Hidromiel Acre" 
      text="fermento de miel de abeja 100% natural con 
      durazno que posee un sabor agridulce" 
       image={Prod1}
      price="1,080"/>
      <Cards
       title="Hidromiel Aureum" 
       text="La hidromiel Aureum es un fermento con toques frutales y aflorados." 
        image={Prod2}
       price="1,920"/>
      <Cards
       title="Hidromiel Berserker (Clásica)" 
       text="fermento de miel de abeja 100% natural, acompañado de la 
       sensación burbujeante típica de una hidromiel joven" 
        image={Prod3}
       price="1,080"/>
      </CardContainer>
     
    </SellerSection>
  )
}

export default BestSellers
