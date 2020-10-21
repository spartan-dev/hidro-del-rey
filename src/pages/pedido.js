import React,{useContext,useEffect,useSate} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/Common/PageTitle"
import {
  TextHeader,
  FormSquare,
  FormTitle,
  InputForm,
  Container,
  ButtonContainer,
} from "../components/Pedido/pedidosStyled"
import {
  GlobalStateContext,
} from "../context/storeContext"
const Pedido = () => {

  const state = useContext(GlobalStateContext)
/*   useEffect(()=>{
    form.setFieldsValue({

    })
  }) */
  console.log(state)
  return (
    <Layout>
      <SEO title="pedidos" />
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <PageTitle>Inicio &#62; Hacer Pedido</PageTitle>
        <TextHeader>
          {" "}
          A nosotros nos gusta tener un trato más personalizado contigo, por
          favor deja los siguientes datos y en breve nos comunicaremos contigo.
        </TextHeader>
        <form name="Contact Form" action="/succes" method="POST" data-netlify="true">
          <div className="uk-flex uk-flex-around@m uk-flex-around@s uk-flex-wrap  uk-flex-middle" >
            <FormSquare className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
              <div style={{ width: "100%" }} className="uk-flex uk-flex-left">
                <FormTitle>Solicitud de Datos</FormTitle>
              </div>
              <input type="hidden" name="form-name" value="Contact Form" />
              <InputForm name="nombre" type="text" placeholder="Nombre y Apellido" />
              <InputForm name="telefono" type="text" placeholder="Teléfono" />
              <InputForm name="email" type="text" placeholder="Correo@ejemplo.com" />
              {state.shopingCart.map((item,idx) =>{
               return ( <div key={idx} >
                  
                <div  style={{display:item.qty === 0 ? "none":"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                <label>{`24 botellas de  ${item.name}`}</label>
                <InputForm  value={item.qty} name="cantidad" type="text" fontchange/>
                </div>
                <div style={{display:item.qty2 === 0 ? "none":"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                <label>{`12 botellas de  ${item.name}`}</label>
                <InputForm value={item.qty2} name="qty2" type="text" fontchange/>
                </div>

                </div>)
              })}
            <InputForm value={`${state.total}$MXN`} name="Total" type="text" fontchange style={{display: state.total === 0 ? "none": "block"}}/>
            </FormSquare>
            <ButtonContainer>
              <button type="submit" className="buttonMod uk-button  uk-button-large">
                Enviar
              </button>
            </ButtonContainer>
          </div>
        </form>
      </Container>
    </Layout>
  )
}

export default Pedido
