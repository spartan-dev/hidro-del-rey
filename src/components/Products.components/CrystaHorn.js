import React from 'react'
import Card from "../Common/Cards/Cards"
import Horn from '../../images/assets/horn.jpg'
//import { useStaticQuery, graphql} from "gatsby"

const CrystaHorn = () => {
  // const data = useStaticQuery(graphql`
  // query{
  //   file(relativePath: {eq: "assets/horn.jpg"}) {
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
      title="Cuerno de Crystal"
      text="Cuerno de cristal con capacidad de 350 ml "
      image={Horn}
      price="350"
      botles={false}
      showButtons={true}
      />
    </div>
  )
}

export default CrystaHorn
