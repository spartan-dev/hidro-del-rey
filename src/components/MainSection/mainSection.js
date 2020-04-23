import React from "react"
import { Main, MarcoImage } from "./styledMain"
import Img from "gatsby-image"
const mainSection = ({ image }) => {
  return (
    <Main>
      <h1>La Hidromiel del rey es un producto 100% Méxicano</h1>
      <MarcoImage>
      <Img style={{borderRadius:"5px"}} fluid={image.childImageSharp.fluid} alt={image.childImageSharp.fluid.originalName} />
       </MarcoImage>
    </Main>
  )
}

export default mainSection
