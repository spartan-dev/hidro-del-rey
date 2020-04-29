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
          <FontAwesomeIcon
            style={{ color: "#000000", height: "25px", width: "25px" }}
            icon={"shopping-cart"}
          />
        </span>
      </nav>
    </TopHeader>
    <NavHeader>
      <ul>
        <li>
          {" "}
          <Link to="/history">Historia</Link>
        </li>
        <li>
          {" "}
          <Link to="/characteristics">Caracter&iacute;sticas</Link>
        </li>
        <li>
          {" "}
          <Link to="/products">Productos</Link>
        </li>
      </ul>
    </NavHeader>
  </HeaderContainer>
)

export default Header
