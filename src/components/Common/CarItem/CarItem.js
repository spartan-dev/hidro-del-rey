import React, { useState,useContext,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { QtyButton, TotalPrice,ItemTitle } from "../../CarComponents/carStyled"
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/storeContext'

const CarItem = ({ item } ) => {
  const state  = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const [qty, setQty] = useState(item.qty)
  const [totalis, setTotal] = useState(state.total)
  let parso = (parseFloat(item.price).toFixed(2) * item.qty)
  const handleChange = () => {
   console.log("hanlde chnage")
  }
  const handleChangeInput = () => {
    console.log("estas en change inpit")
  }
  const handleDelete = (id,item) => {
    dispatch({type:"DELETE_ITEM", id})
    setTotal(state.total - (item.price *item.qty))
    //state.total = state.total - (item.price *item.qty)
  }

  const formatNumber = price => {
    if(!price) return 0;
    let semi = price.replace(/,/gm, "");
    let total = (parseFloat(semi,2)) * (item.qty);
    return total.toFixed(2)
  }
  
  return (
    <div
      style={{borderBottom:"1px solid #000000", marginBottom:"2em"}}
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
          <QtyButton>
            <button
              onClick={() => (qty > 1 ? setQty(qty - 1) : null)}
              onChange={handleChange}
            >
              -
            </button>
              <input type="number" value={qty} onChange={handleChangeInput}/>
            <button onClick={() => setQty(qty + 1)} onChange={handleChange}>
              +
            </button>
          </QtyButton>
          <FontAwesomeIcon onClick={()=> handleDelete(item.id,item)} icon="trash" style={{ color: "#000000",cursor:"pointer" }} />
        </div>
      </div>

      <div>
        <div className=" uk-flex uk-flex-center uk-flex-center uk-flex-middle">
         <TotalPrice>$ {parso} MXN</TotalPrice> 
        </div>
      </div>
    </div>
  )
}

export default CarItem
