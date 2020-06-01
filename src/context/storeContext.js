import React, { createContext, useReducer } from "react"

const initialState = {
  theme:"light",
  shopingCart:[],
  total:0
}
function reducer (state,action){
  switch (action.type) {
    case "TOGGLE_THEME":{
      return{
        ...state,
        theme: state.theme === "light" ? "dark":"light"
      }
    }
    case "ADD_ITEM":{
       return{
         ...state,
        shopingCart: [...state.shopingCart, action.shopingCart]
       }
    }
    case "DELETE_ITEM":{
      return{
        ...state,
         shopingCart: state.shopingCart.filter((item) => item.id !== action.id)
      }
    }
   /*  case "UPDATE_TOTAL":{
      return{
        ...state,
        total: 
      }
    } */
      default:
        throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state,"en store")
  return(
    <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
export const GlobalStateContext = createContext(initialState)
export const GlobalDispatchContext = createContext(initialState)
export default GlobalContextProvider


