import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/Header/header'
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
    headerBot: file(relativePath: {eq: "assets/inicio.jpg"}) {
      childImageSharp {
        fluid(maxHeight:600){
          originalName
          ...GatsbyImageSharpFluid_withWebp

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
    <Header topImage={data.headerTop} botImage={data.headerBot} images={data.product}/>
  </Layout>
  )
 
}

export default IndexPage
