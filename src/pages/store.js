import React, { useContext, useState } from "react"
import Layout from "../components/layout"
import Container from "../components/Common/Container"
import SEO from "../components/seo"
import CarItem from '../components/Common/CarItem/CarItem'
import { PageTitle } from "../components/Common/PageTitle"
import {
  ShopCarContainer,
  ShopCarNav,
} from "../components/CarComponents/carStyled"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/storeContext"
const Store = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const { shopingCart } = state
  const totalPrice = shopingCart.reduce((acc, curr) => acc + curr.price, 0 )
  return (
    <Layout>
      <SEO title="store hidromiel" />
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; My Pedido</PageTitle>
        </div>
        <ShopCarContainer>
          <ShopCarNav>
            <ul>
              <li>Productos</li>
              <li>Cantidad</li>
              <li>Precio</li>
            </ul>
          </ShopCarNav>
            {shopingCart.length ? (
              shopingCart.map((item,idx) => {
               return <CarItem key={idx} item={item}/>
              })
            ):(<div><PageTitle>carrito vacio</PageTitle></div>)}
           
        </ShopCarContainer>
        <div className="uk-flex uk-flex-right uk-flex-middle">
          <div className="uk-flex uk-flex-middle uk-flex-column">
                <span>TOTAL  $ 1080 MXN</span>
               {/*  <Button>Hacer Pedido</Button> */}
               <button className=" buttonMod uk-button  uk-button-large">Hacer Pedido</button>

          </div>
               
        </div>
      </Container>
    </Layout>
  )
}

export default Store
