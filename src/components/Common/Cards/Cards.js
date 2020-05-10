import React,{useContext,useState} from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
  QtySelect
} from "./styledCards"
import Button from "../Button"
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/storeContext'

const Cards = ({ title, text, bottles, image, price, showButtons }) => {
  const state  = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const [qty, setQty] = useState(1)
  
  let box = {name:title, qty,price}
  
  const handleClick= (e)=>{
    
    dispatch({type:"ADD_ITEM",shopingCart:box,})
  }
  const handleChange = (e) => {
   box = {name:title,qty:qty ,price:price}
   state.shopingCart = [state.shopingCart,box]
   //console.log(state,"en el change")
    console.log(box)
    console.log("estas en el change")
  }
  return (
    <ContainerCard>
      <CardImage>
        <img
          style={{ width: "fit-content", height: "320px" }}
          src={image}
          alt={title}
        />
        {/* <Img fixed={image}/> */}
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardInfo>
        {bottles ? (
          <>
            Caja con 24 botellas de 350ml c/u.
            <br />
          </>
        ) : null}
        {text}
      </CardInfo>
      <span>{`$ ${price} MXN`}</span>
      <CardButtonContainer>
        {showButtons ? (
          <div className="uk-form uk-form-stacked uk-flex uk-flex-between">
            <div className="uk-form-row">
              <div className="uk-form-controls uk-flex uk-flex-between uk-flex-middle">
                <QtySelect>
                  <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}
                  onChange={handleChange}>
                    -
                  </button>
                  <input type="text" disabled value={qty}  />
                  <button onClick={() => setQty(qty + 1)} 
                  onChange={handleChange}>+</button>
                </QtySelect>
                <Button onClick={handleClick}>agregar</Button>
              </div>
            </div>
          </div>
        ) : null}
      </CardButtonContainer>
    </ContainerCard>
  )
}

export default Cards
