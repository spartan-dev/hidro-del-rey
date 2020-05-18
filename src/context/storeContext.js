import React, { createContext, useReducer,useState } from "react"
export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()
const initialState = {
  theme:"light",
  shopingCart:[]
}
function reducer (state,action){
  console.log(action)
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
        shopingCart:[...state.shopingCart]
      }
    }
      default:
        throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.shopingCart,"en store")
  return(
    <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
export default GlobalContextProvider


