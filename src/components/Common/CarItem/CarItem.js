import React, { useState, useContext,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { QtyButton, TotalPrice, ItemTitle } from "../../CarComponents/carStyled"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/storeContext"
import { PriceBadge } from "./styledCarItem"
const CarItem = ({ item }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  // const [qty, setQty] = useState(item.qty)
  const [totalis, setTotal] = useState(state.total)
  let parso24 = parseFloat(item.price24).toFixed(2) * item.qty
  let parso12 = parseFloat(item.price12).toFixed(2) * item.qty2
  let allTotal = parso24 + parso12
  useEffect(()=>{
    setTotalPrice()
  })
  const setTotalPrice =   ()=>{
    let price = state.shopingCart
      .map(item => item.price24 * item.qty + item.price12 * item.qty2)
      .reduce((acc, current) => acc + current, 0)
    return state.total = price
  }
  const handleDelete = (id, item) => {
    dispatch({ type: "DELETE_ITEM", id })
    /* setTotal(
      state.shopingCart
      .map(item => item.price24 * item.qty + item.price12 * item.qty2)
      .reduce((acc, current) => acc + current, 0)
      ) */
    //state.total = state.total - (item.price *item.qty)
  }

  /*  const formatNumber = price => {
    if(!price) return 0;
    let semi = price.replace(/,/gm, "");
    let total = (parseFloat(semi,2)) * (item.qty);
    return total.toFixed(2)
  } */

  return (
    <div
      style={{ borderBottom: "1px solid #000000", marginBottom: "2em" }}
      className="uk-child-width-1-12  uk-text-center uk-flex uk-flex-around uk-flex-center uk-flex-middle"
    >
      <div>
        <div className="">
          <img
            style={{ width: "185px", height: "165px" }}
            src={item.image}
            alt={item.name}
          />
          <ItemTitle>{item.name}</ItemTitle>
        </div>
      </div>
      <div>
        <div className="uk-flex uk-flex-around uk-flex-center uk-flex-middle">
          <div>
            <ItemTitle>{`Caja de 24 botellas`}</ItemTitle>
            <PriceBadge className="uk-badge">{`Unidades: ${item.qty}`}</PriceBadge>
            <PriceBadge className="uk-badge">{`Precio: ${parso24}`}</PriceBadge>
            <ItemTitle>{`Caja de 12 botellas`}</ItemTitle>
            <PriceBadge className="uk-badge">{`Unidades: ${item.qty2}`}</PriceBadge>
            <PriceBadge className="uk-badge">{`Precio: ${parso12}`}</PriceBadge>
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => handleDelete(item.id, item)}
              icon="trash"
              style={{ color: "#000000", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className=" uk-flex uk-flex-center uk-flex-center uk-flex-middle">
          <TotalPrice>$ {allTotal} MXN</TotalPrice>
        </div>
      </div>
    </div>
  )
}

export default CarItem
