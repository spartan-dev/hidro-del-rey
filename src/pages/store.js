import React,{useContext} from 'react'
import Layout from "../components/layout"
import Container from "../components/Common/Container"
import SEO from "../components/seo"
import {GlobalDispatchContext, GlobalStateContext} from '../context/storeContext'
const Store = (props) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(dispatch)
  console.log(state)
  return (
      <Layout>
        <SEO title="store hidromiel"/>
        <h1>Tienda</h1>
           <div>
           </div>
      </Layout>
     
    
  )
}

export default Store
