import React from 'react'
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer
} from './styledCards'
import Button from '../Button'
import product from '../../../images/galery/acre.jpg'
const Cards = () => {
  return (
     <ContainerCard>
        <CardImage>
          <img src={product}/>
        </CardImage>
        <CardTitle>Hidromiel Acre</CardTitle>
        <CardInfo>
          Caja con 24 botellas de 350ml c/u. <br/>fermento de miel de abeja 100%
           natural con durazno que posee un sabor agridulce  
           </CardInfo>
           <span>$ 1, 080 mxn </span>
        <CardButtonContainer>
        <form className="uk-form uk-form-stacked">
    <div className="uk-form-row">
        <div className="uk-form-controls">
          <input style={{width:"110px",height:"25px", paddingLeft:"3px"}} type="number" placeholder="Pza"/>
          <Button >agregar</Button>
        </div>
    </div>
</form>   
        </CardButtonContainer>
     </ContainerCard>
  )
}

export default Cards
