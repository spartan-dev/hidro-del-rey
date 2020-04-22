import React from 'react'
import {Footer,FContainer,FootBox} from './styledFooter'
import MiniLogo from '../../images/assets/logoRed.png'
import Whats from '../../images/icons/whats.svg'
import Face from '../../images/icons/face.svg'
import Insta from '../../images/icons/insta.svg'
const footer = () => {
  return (
    <Footer>
      <FContainer className="uk-flex">
        <FootBox style={{width:"187px",height:"162px"}}>
          <img src={MiniLogo} alt="Hidromiel del rey" sizes="" />
        </FootBox>
        <FootBox  className="uk-flex uk-flex-center" style={{width:"403px",height:"60px"}}>
          <span>By Marc Tello</span>
          </FootBox>
          <FootBox style={{
            width:"300px",
            height:"45px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            }} className="uk-flex uk-flex-center">
            <a href="https://wa.me/5217151066566"  target="_blank"> <img src={Whats} alt="Whatsapp"/></a>
            <a href="https://www.facebook.com">
              <img style={{width:"38px", height:"38px"}} src={Face} alt="face link"/>
            </a>
            <a href=""> <img style={{width:"38px", height:"38px"}} src={Insta} alt="instagram link"/></a>
          </FootBox>
      </FContainer>
    </Footer>
  )
}

export default footer
