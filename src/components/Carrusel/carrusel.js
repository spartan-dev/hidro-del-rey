import React from "react"
import { CarruselContainer } from "./styled"
import Img from "gatsby-image"
import Button from "../Common/Button"
const Carrusel = ({ images }) => {
  console.log(images)
  return (
    <CarruselContainer>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slider="true"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
          {Object.keys(images).length ? (
            images.edges.map((image, i) => {
              return (
                <li key={i}>
                     <Img
                        fluid={image.node.childImageSharp.fluid}
                        title={image.node.childImageSharp.originalName}
                      />
                </li>
              )
            })
          ) : (
            <div uk-spinner></div>
          )}
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
          style={{ color: "#590c0c" }}
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slider-item="next"
          style={{ color: "#590c0c" }}
        />
      </div>
    </CarruselContainer>
  )
}

export default Carrusel
