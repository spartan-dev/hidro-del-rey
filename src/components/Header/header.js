import React from "react"
import { HeaderContainer, TopHeader,NavHeader } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searchin from '../Common/Search/SearchIn'
import Img from "gatsby-image"
const Header = ({ topImage, botImage, images }) => (
  <HeaderContainer>
    <TopHeader>
      <div>
        <Img fluid={topImage.childImageSharp.fluid} alt ={topImage.childImageSharp.fluid.originalName}/>
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
   
  </HeaderContainer>
)

export default Header
