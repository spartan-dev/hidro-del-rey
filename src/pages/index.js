import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from '../components/MainSection/mainSection'
import BestSeller from '../components/BestSellers/bestSellers'
import Advertising from '../components/advertising'
import '../utils/fontAwesome'

import { useStaticQuery, graphql} from "gatsby"
const IndexPage = () => {
 const data = useStaticQuery(graphql`
   query{
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
    <MainSection image={data.headerBot}/>
    <BestSeller images={data.product}/>
    <Advertising/>
  </Layout>
  )
 
}

export default IndexPage
