import React,{useContext} from "react"
import { HeaderContainer, TopHeader, NavHeader,CarItemsContainer,CarContainer,MenuContainer,MenuContent } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Searchin from "../Common/Search/SearchIn"
import Img from "gatsby-image"
import {GlobalStateContext} from '../../context/storeContext'
const Header = ({ topImage, botImage, images }) => {
  const state = useContext(GlobalStateContext)
  
  return (
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
          <MenuContainer className="uk-width-1-5">
          <ul className="uk-nav-default " uk-nav="multiple: true">
            <li className="uk-parent">
              <a href="#" uk-toggle="target: #menu">
                <span style={{color:"#000000"}} uk-icon="icon: menu; ratio: 2"></span>
              </a>
            </li>
          </ul>
        </MenuContainer>
            <article style={{display:"flex"}}>
              <Link
                to="/store"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <FontAwesomeIcon
                  style={{
                    color: "#000000",
                    height: "25px",
                    width: "25px",
                    marginRight: "5px",
                  }}
                  icon={"shopping-cart"}
                  size="2x"
                />
              </Link>
              <CarItemsContainer>
              {state.shopingCart.length ? state.shopingCart.length : 0}
            </CarItemsContainer>
            </article>
          </CarContainer>
          
        </header>
        
      </TopHeader>
      <MenuContent id="menu" hidden aria-hidden="true">
            <ul className="uk-nav-sub">
              <hr/>
                <Link
                 style={{ color: "#000000", textDecoration: "none",fontFamily:"Volkron" }}
                 to="/history"
                 activeClassName="active"
                ><li>Historia</li></Link>
                <hr/>
                <Link
                 style={{ color: "#000000", textDecoration: "none" }}
                 to="/characteristics"
                 activeClassName="active"
                 partiallyActive={true}
                ><li>Caracter&iacute;sticas</li></Link>
                <hr/>
                <Link
                 style={{ color: "#000000", textDecoration: "none" }}
                 to="/products"
                 activeClassName="active"
                ><li>Productos</li></Link>
            </ul>
          </MenuContent>
      <NavHeader>
        <ul>
          {" "}
          <Link
            style={{ color: "#000000", textDecoration: "none" }}
            to="/history"
            activeClassName="active"
          >
            <li>Historia</li>
          </Link>{" "}
          <Link
            style={{ color: "#000000", textDecoration: "none" }}
            to="/characteristics"
            activeClassName="active"
            partiallyActive={true}
          >
            <li>Caracter&iacute;sticas</li>
          </Link>{" "}
          <Link
            style={{ color: "#000000", textDecoration: "none" }}
            to="/products"
            activeClassName="active"
          >
            <li>Productos</li>
          </Link>
        </ul>
      </NavHeader>
    </HeaderContainer>
  )
}

export default Header
