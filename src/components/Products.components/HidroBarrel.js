import React from 'react'
import Card from "../Common/Cards/Cards"
import Barrel from '../../images/assets/barril.jpg'
import {AllCardsContainer} from './productsStyles'
const HidroBarrel = () => {
  return (
    <AllCardsContainer oneCard>
      <Card
      title="Barril Desechable"
      text="Barril salida de 
      petainer desechable con capacidad de 20 litros"
      image={Barrel}
      price="El precio de éste productopuede variar  pregunta por él en nuestras redes sociales"
      bottles={false}
      showButtons={false}
      />
    </AllCardsContainer>
  )
}

export default HidroBarrel
