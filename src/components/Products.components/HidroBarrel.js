import React from 'react'
import Card from "../Common/Cards/Cards"
import Barrel from '../../images/assets/barril.jpg'
import {AllCardsContainer} from './productsStyles'

//import { useStaticQuery, graphql} from "gatsby"
const HidroBarrel = () => {
  // const data = useStaticQuery(graphql`
  // query{
  //   file(relativePath: {eq: "assets/barrel.jpg"}) {
  //   childImageSharp {
  //     fluid(maxHeight: 600) {
  //       originalName
  //       ...GatsbyImageSharpFluid
  //     }
  //   }
  // }
  // }
  // `)
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
