import React from "react"
import { HeaderContainer, TopHeader, BottomHeader } from './styled'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const Header = ({ topImage, botImage }) => (
  <HeaderContainer>
    <TopHeader>
      <div>
        <Img
          fluid={topImage.childImageSharp.fluid}
        />
      </div>

    </TopHeader>
    <BottomHeader>
       <div>
         <BackgroundImage fluid={botImage.childImageSharp.fluid}/>
       </div>
      
       
    </BottomHeader>
  </HeaderContainer>
)

export default Header
