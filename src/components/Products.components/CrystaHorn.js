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
      price="350"
      botles={false}
      showButtons={true}
      />
    </AllCardsContainer>
  )
}

export default CrystaHorn
