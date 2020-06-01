import React, { useContext, useState } from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
  QtySelect,
  QtyContainer
} from "./styledCards"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/storeContext"

const Cards = ({
  title,
  text,
  bottles,
  image,
  price24,
  price12,
  id,
  index,
  showButtons,
}) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const [qty, setQty] = useState(0)
  const [qty2, setQty2] = useState(0)
  let box = { name: title, qty, qty2, price24, price12, image, id }

  const handleClick = () => {
    dispatch({ type: "ADD_ITEM", shopingCart: box })
  }
  const handleChange = () => {
    box = { name: title, qty: qty, qty2:qty2, price24: price24,price12:price12, image: image, id }
    state.shopingCart = [state.shopingCart, box]
  }
  return (
    <div style={{ marginBottom: "2em" }}>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={image} alt={title} width="400" height="200" />
        </div>
        <div className="uk-card-body">
          <CardTitle className="uk-card-title">{title}</CardTitle>
          <CardInfo className="uk-width-expand">
            {bottles ? (
              <>
                Caja con 24 botellas de 350ml c/u.
                <br />
              </>
            ) : null}
            {text}
          </CardInfo>
          <span>{`Caja 24 $${parseFloat(price24).toFixed(2)} MXN`}</span>
         <br/>
          <span>{`Caja 12 $${parseFloat(price12).toFixed(2)} MXN`}</span>
        </div>{" "}
        {/**fin de header */}
        <hr/>
        <div style={{ borderTop: "none" }} className="uk-card-footer">
          {showButtons ? (
            <CardButtonContainer>
                <QtyContainer>
                <label htmlFor="">Caja de 24</label>
                <QtySelect>
                  <button
                    onClick={() => (qty > 0 ? setQty(qty - 1) : null)}
                    onChange={handleChange}
                  >
                    -
                  </button>
                  <input type="text" disabled value={qty} />
                  <button
                    onClick={() => setQty(qty + 1)}
                    onChange={handleChange}
                  >
                    +
                  </button>
                </QtySelect>
                </QtyContainer>
                <QtyContainer>
                <label htmlFor="">Caja de 12</label>
                <QtySelect>
                  <button
                    onClick={() => (qty2 > 0 ? setQty2(qty2 - 1) : null)}
                    onChange={handleChange}
                  >
                    -
                  </button>
                  <input type="text" disabled value={qty2} />
                  <button
                    onClick={() => setQty2(qty2 + 1)}
                    onChange={handleChange}
                  >
                    +
                  </button>
                </QtySelect>
                </QtyContainer>
              <div className="">
                <button
                  onClick={handleClick}
                  className="buttonMod uk-width-1-1 uk-button uk-button-small"
                >
                  Agregar
                </button>
              </div>
            </CardButtonContainer>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Cards
