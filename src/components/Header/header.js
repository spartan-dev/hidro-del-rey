import React from "react"
import { HeaderContainer, TopHeader, BottomHeader,NavHeader } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searchin from '../Common/Search/SearchIn'
import Img from "gatsby-image"
import Carrusel from "../Carrusel/carrusel"
const Header = ({ topImage, botImage, images }) => (
  <HeaderContainer>
    <TopHeader>
      <div>
        <Img fluid={topImage.childImageSharp.fluid} />
      </div>
      <nav>
           <Searchin icon="search"/>
           <span style={{width:'200px'}}>
           <FontAwesomeIcon style={{color:'#000000',height:'25px',width:'25px'}} icon={'shopping-cart'}/>   
           </span>
      </nav>
    </TopHeader>
    <NavHeader>
        <ul>
          <li>Historia</li>
          <li>Caracteristicas</li>
          <li>Productos</li>
        </ul>
      </NavHeader>
    {/* <BottomHeader>
      <Carrusel images={images} />
    </BottomHeader> */}
  </HeaderContainer>
)

export default Header
