import React,{useContext} from "react"
import { HeaderContainer, TopHeader, NavHeader,CarItemsContainer,CarContainer } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Searchin from "../Common/Search/SearchIn"
import Img from "gatsby-image"
import {GlobalStateContext} from '../../context/storeContext'
const Header = ({ topImage, botImage, images }) => {
  const state = useContext(GlobalStateContext)
  
  return(
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
      <header>
       {/*  <Searchin icon="search" /> */}
        <CarContainer>
        <span style={{}}>
          <Link to="/store" style={{textDecoration:"none", color:"#000000"}}>
          <FontAwesomeIcon
            style={{ color: "#000000", height: "25px", width: "25px",marginRight:"5px" }}
            icon={"shopping-cart"}
            size="2x"
            //onClick={()=> state.total}
          /></Link>
        </span>
        <CarItemsContainer>{state.shopingCart.length ? state.shopingCart.length:0}</CarItemsContainer>
         </CarContainer>
       
      </header>
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
}

export default Header
