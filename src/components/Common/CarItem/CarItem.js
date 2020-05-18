import React, { useState,useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { QtyButton, TotalPrice,ItemTitle } from "../../CarComponents/carStyled"
import {GlobalDispatchContext, GlobalStateContext} from '../../../context/storeContext'

const CarItem = ({ item }) => {
  const state  = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const [qty, setQty] = useState(1)
  console.log(item,"listas llegasadas")
  const handleChange = () => {
    /*  box = {name:title,qty:qty ,price:price,image:image}
    state.shopingCart = [state.shopingCart,box] */
    //console.log(state,"en el change")
    console.log("estas en el change")
  }
  const handleDelete = (idx) => {
    //dispatch({type:"DELETE_ITEM",shopingCart:state.shopingCart.delete})
    console.log("numero de box",idx)
  }
  const formatNumber = price => {
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
            <input type="number" disabled value={item.qty} />
            <button onClick={() => setQty(qty + 1)} onChange={handleChange}>
              +
            </button>
          </QtyButton>
          <FontAwesomeIcon onClick={handleDelete} icon="trash" style={{ color: "#000000",cursor:"pointer" }} />
        </div>
      </div>

      <div>
        <div className=" uk-flex uk-flex-center uk-flex-center uk-flex-middle">
         <TotalPrice>$ {formatNumber(item.price)} MXN</TotalPrice> 
        </div>
      </div>
      {/*    <div>
        <div
          className=" uk-grid-match uk-child-width-1-2 uk-grid-collapse uk-child-width-expand@s uk-text-center"
          uk-grid="true"
        >
       

        
        </div>
      </div> */}
    
    </div>
  )
}

export default CarItem