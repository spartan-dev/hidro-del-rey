import React,{useContext} from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
} from "./styledCards"
import Button from "../Button"
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/storeContext'
const Cards = ({ title, text, bottles, image, price, showButtons }) => {
  const state  = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  let box = {name:title, qty:0,price:0}
  const handleClick= (e)=>{
    e.preventDefault()
    dispatch({type:"ADD_ITEM",shopingCart:box})
    console.log(state.shopingCart,"en el click")
  }
  const handleChange = (e) => {
   const { value } = e.target
   box = {name:title, qty:value,price:price}
   state.shopingCart = [...box]
   //console.log(state,"en el change")
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
          <form className="uk-form uk-form-stacked">
            <div className="uk-form-row">
              <div className="uk-form-controls">
                <input
                  name="qty"
                  style={{ width: "110px", height: "25px", paddingLeft: "3px" }}
                  type="number"
                  placeholder="Pza"
                  min="0"
                  onChange={handleChange}
                />
                <Button onClick={handleClick}>agregar</Button>
              </div>
            </div>
          </form>
        ) : null}
      </CardButtonContainer>
    </ContainerCard>
  )
}

export default Cards
