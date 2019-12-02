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
const Layout = ({ children }) => {
 useEffect(()=>{
   Uikit.use(icons)
 })
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
