import React from 'react'
import Card from "../Common/Cards/Cards"
import Horn from '../../images/assets/horn.jpg'
import {AllCardsContainer} from './productsStyles'


const CrystaHorn = () => {
  return (
    <AllCardsContainer oneCard>
      <Card
      title="Cuerno de Crystal"
      text="Cuerno de cristal con capacidad de 350 ml "
      image={Horn}
      botles={false}
      showButtons={false}
      showPrices

      />
    </AllCardsContainer>
  )
}

export default CrystaHorn
