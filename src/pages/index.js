import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/Header/header'
import MainSection from '../components/MainSection/mainSection'
import BestSeller from '../components/BestSellers/bestSellers'
import '../utils/fontAwesome'

import { useStaticQuery, graphql} from "gatsby"
const IndexPage = () => {
 const data = useStaticQuery(graphql`
   query{
     headerTop:file(relativePath: {eq: "assets/logoLine.png"}) {
      childImageSharp {
        fluid(maxHeight: 600) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerBot: file(relativePath: {eq: "assets/productos2.jpg"}) {
      childImageSharp {
        fluid( maxWidth:1000){
          originalName
          ...GatsbyImageSharpFluid

        }
      }
    }
   product: allFile(filter:{absolutePath:{regex:"/images/galery/"}}) {
      edges{
       node{
         childImageSharp{
           fluid{
             originalName
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
     }
   }
 `)
  return(
    <Layout>
    <SEO title="Home" />
    <Header topImage={data.headerTop} images={data.product}/>
    <MainSection image={data.headerBot}/>
    <BestSeller images={data.product}/>
  </Layout>
  )
 
}

export default IndexPage
