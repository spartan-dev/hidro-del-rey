import React,{useState} from "react"
import { PageTitle } from "../components/Common/PageTitle"
import Layout from "../components/layout"
import Container from "../components/Common/Container"
import AllCards from "../components/Products.components/AllCards"
import HidroBarrel from '../components/Products.components/HidroBarrel'
import CrystaHorn from '../components/Products.components/CrystaHorn'
import {
  MainContainer,
  BottonSection,
  BigButton,
  CardSection,
  TextAsideContainer,
  AsideTextSection
} from "../components/Products.components/productsStyles"
import SEO from "../components/seo"
import {useStaticQuery,graphql} from 'gatsby'
const Products = () => {
  const [ visible, setVisible ] = useState("AllCards")
const data = useStaticQuery(graphql`
query{
 allFile(filter: {relativeDirectory: {eq: "galery"}}) {
 edges {
   node {
     childImageSharp {
       fixed(width: 383, height: 381) {
         originalName
         ...GatsbyImageSharpFixed
       }
     }
   }
 }
}
}
`)
const {edges} = data.allFile
  return (
    <Layout>
      <SEO title="Hidromiel del rey Products" />
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; Productos </PageTitle>
        </div>
        <div style={{ padding: "1em" }}>
          <MainContainer>
            <BottonSection>
              <aside>
                <div>
                  <BigButton visible = {visible === "AllCards" ? true:false} onClick={()=> setVisible("AllCards")}>Hidromiel</BigButton>
                  <BigButton visible = {visible === "HidroBarrel" ? true:false}  onClick={()=> setVisible("HidroBarrel")}>Barril <br/> Desechable</BigButton>
                  <BigButton visible = {visible === "CrystaHorn" ? true:false}   onClick={()=> setVisible("CrystaHorn") }>Cuerno de <br/>Cristal</BigButton>
                </div>
                <TextAsideContainer>
                  <AsideTextSection>
                    <span>Hacemos envíos a varias partes de la República.</span>
                  </AsideTextSection>
                  <AsideTextSection>
                    <span>El costo no incluye envío ni IVA.</span>
                  </AsideTextSection>
                </TextAsideContainer>
              </aside>
            </BottonSection>
            <CardSection>
              <aside>
                <Container>
                  {visible === "AllCards" ? <AllCards images={edges}/> : null ||
                   visible === "HidroBarrel"?  <HidroBarrel/>:null ||
                   visible === "CrystaHorn" ? <CrystaHorn/>:null}
                </Container>
              </aside>
            </CardSection>
          </MainContainer>
        </div>
      </Container>
    </Layout>
  )
}

export default Products
