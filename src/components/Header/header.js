import React from "react"
import { HeaderContainer, TopHeader, NavHeader } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Searchin from "../Common/Search/SearchIn"
import Img from "gatsby-image"
const Header = ({ topImage, botImage, images }) => (
  <HeaderContainer>
    <TopHeader>
      <div>
        <Link to="/">
        <Img
          fluid={topImage.childImageSharp.fluid}
          alt={topImage.childImageSharp.fluid.originalName}
        />
        </Link>
      </div>
      <nav>
        <Searchin icon="search" />
        <span style={{ width: "200px" }}>
          <Link to="/store">
          <FontAwesomeIcon
            style={{ color: "#000000", height: "25px", width: "25px" }}
            icon={"shopping-cart"}
          /></Link>
        </span>
      </nav>
    </TopHeader>
    <NavHeader>
      <ul>
        
          {" "}
          <Link 
          style={{color:"#000000",textDecoration:"none"}} 
          to="/history"
          activeClassName="active"
          
          ><li>Historia</li></Link>
      
        
          {" "}
          <Link  
          style={{color:"#000000",textDecoration:"none"}}  
          to="/characteristics"
          activeClassName="active"
          partiallyActive={true}
          ><li>Caracter&iacute;sticas</li></Link>
        
        
          {" "}
          <Link  
          style={{color:"#000000",textDecoration:"none"}}  
          to="/products"
          activeClassName="active"
          
          ><li>Productos</li></Link>
        
      </ul>
    </NavHeader>
  </HeaderContainer>
)

export default Header
