/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{useEffect} from "react"
import "./layout.css"
import Uikit from 'uikit'
import icons from 'uikit/dist/js/uikit-icons'
import "uikit/dist/css/uikit.min.css"
import { useStaticQuery, graphql} from "gatsby"
//components 
import Header from './Header/header'
import Footer from './Footer/footer'
const Layout = ({ children }) => {
 useEffect(()=>{
   Uikit.use(icons)
 })
 const data  = useStaticQuery(graphql`
 query{
  headerTop:file(relativePath: {eq: "assets/logoLine.png"}) {
   childImageSharp {
     fluid(maxHeight: 600) {
       originalName
       ...GatsbyImageSharpFluid
     }
   }
 }
}
 `)
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Header topImage={data.headerTop} images={data.product}/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
