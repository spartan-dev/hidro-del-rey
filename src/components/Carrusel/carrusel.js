import React from 'react'
import {CarruselContainer} from './styled'
import Img from 'gatsby-image'
import Button from '../Common/Button'
const Carrusel = ({images}) => {
    console.log(images)
    return (
        <CarruselContainer>
            <div className="uk-position-relative uk-visible-toggle uk-light" 
            tabIndex="-1" uk-slider="true" 
            uk-slider="autoplay: true" 
            uk-slider="pause-on-hover: true"
            
            >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            {Object.keys(images).length ? (
                images.edges.map((image,i) =>{
                    return(
                    //     <li key={i}>
                    //     <div className="uk-panel">
                    //       <Img fluid={image.node.childImageSharp.fluid} title={image.node.childImageSharp.originalName} />
                    //     </div>
                    // <Button>link a detalles a {image.node.childImageSharp.originalName}</Button>
                    //   </li>
                    <li key={i}>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <Img fluid={image.node.childImageSharp.fluid} title={image.node.childImageSharp.originalName} />
                            </div>
                            <div className="uk-card-body">
                            <h3 className="uk-card-title">{image.node.childImageSharp.originalName}</h3>
                            <Button>link a detalles a {image.node.childImageSharp.originalName}</Button>
                            </div>
                        </div>
                    </li>
                    )
                })
            ):(<div uk-spinner></div>)}
         
         
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" 
        href="#" uk-slidenav-previous="true" 
        uk-slider-item="previous" 
        style={{color:'#590c0c'}}
        />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" 
        href="#" uk-slidenav-next="true" 
        uk-slider-item="next" 
        style={{color:'#590c0c'}}
        />
      </div>

        </CarruselContainer>
    )
}

export default Carrusel
