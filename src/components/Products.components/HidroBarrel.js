import React from 'react'
import Card from "../Common/Cards/Cards"
import Barrel from '../../images/assets/barril.jpg'
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
    <div>
      <Card
      title="Barril Desechable"
      text="Barril salida d 
      petainer desechable con capacidad de 20 litros"
      image={Barrel}
      price="El precio de éste productopuede variar  pregunta por él en nuestras redes sociales"
      bottles={false}
      showButtons={false}
      />
    </div>
  )
}

export default HidroBarrel
