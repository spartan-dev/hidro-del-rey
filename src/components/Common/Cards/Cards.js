import React,{useContext,useState} from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
  QtySelect
} from "./styledCards"
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/storeContext'

const Cards = ({ title, text, bottles, image, price, id,index,showButtons }) => {
  const state  = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const [qty, setQty] = useState(1)
    
  let box = {name:title, qty,price,image,id}
  
  const handleClick= ()=>{
    dispatch({type:"ADD_ITEM",shopingCart:box,})
  }
  const handleChange = () => {
   box = {name:title,qty:qty ,price:price,image:image,id}
   state.shopingCart = [state.shopingCart,box]
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
      <span>{`$ ${parseFloat(price).toFixed(2)} MXN`}</span>
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
                  <input type="text" disabled value={qty}/>
                  <button onClick={() => setQty(qty + 1)} 
                  onChange={handleChange}>+</button>
                </QtySelect>
{/*                 <Button onClick={handleClick}>agregar</Button>
 */}                <button onClick={handleClick} className="buttonMod uk-width-1-1 uk-button uk-button-small">Agregar</button>

              </div>
            </div>
          </div>
        ) : null}
      </CardButtonContainer>
    </ContainerCard>
  )
}

export default Cards
