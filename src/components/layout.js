
import React, { useEffect } from "react"
import "./layout.css"
import Uikit from "uikit"
import icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
//components
import Header from "./Header/header"
import Footer from "./Footer/footer"
const Lay = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position: relative;
  @media (max-width: 768px) {
  }
`

const Layout = ({ children }) => {
  useEffect(() => {
    Uikit.use(icons)
  })
  const data = useStaticQuery(graphql`
    query {
      headerTop: file(relativePath: { eq: "assets/logoLine.png" }) {
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
    <>
      <Lay>
        <Header topImage={data.headerTop} images={data.product} />
        <main style={{ paddingTop: "2em" }}>{children}</main>
        <Footer />
      </Lay>
    </>
  )
}

export default Layout
