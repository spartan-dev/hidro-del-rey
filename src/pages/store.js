import React, { useContext, useState, useEffect } from "react"
import Layout from "../components/layout"
import Container from "../components/Common/Container"
import SEO from "../components/seo"
import {Link} from 'gatsby'
import CarItem from "../components/Common/CarItem/CarItem"
import { PageTitle } from "../components/Common/PageTitle"
import {
  ShopCarContainer,
  ShopCarNav,
  TotalSpan,
  InfoCart
} from "../components/CarComponents/carStyled"
import {
  GlobalStateContext,
} from "../context/storeContext"
const Store = () => {
  const state = useContext(GlobalStateContext)
  const [totalis, setTotal] = useState(state.total)
  //const { shopingCart } = state
  useEffect(() => {
    totalPrice()
  })
  const totalPrice = () => {
    let price = state.shopingCart
      .map(item => item.price24 * item.qty + item.price12 * item.qty2)
      .reduce((acc, current) => acc + current, 0)
      setTotal(price)
  }

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
          {state.shopingCart.length? (
            state.shopingCart.map((item, idx) => {
              return <CarItem key={idx} item={item} />
            })
          ) : (
            <div style={{padding:"2em"}}>
              <PageTitle>Opsss! parace que no tienes articulos aun!</PageTitle>
            </div>
          )}
        </ShopCarContainer>
        <div className="uk-flex uk-flex-right uk-flex-middle">
          <div className="uk-flex uk-flex-middle uk-flex-column">
            <TotalSpan>TOTAL $ {parseFloat(totalis).toFixed(2)} MXN</TotalSpan>
            <Link to="/pedido">
              {" "}
              <button className="buttonMod uk-button  uk-button-large">
                Hacer Pedido
              </button>

            </Link>
          </div>
        </div>
        <InfoCart>Hacemos envíos a varias partes de la República. <br/>El costo no incluye envío ni IVA.</InfoCart>
      </Container>
    </Layout>
  )
}

export default Store
