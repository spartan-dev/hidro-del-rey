import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Container from '../components/Common/Container'
import { useStaticQuery, graphql } from "gatsby"
const History = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "history" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges[0].node)
  return (
    <Layout>
      <SEO title="History" />
      <Container className="uk-container uk-container-xlarge">
      <div>
        <h1>Inicio>Historia</h1>
      </div>

      <div className="uk-container uk-container-xlarge " uk-grid="true">
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid="true"
        >
          <div  style={{width:"440px",height:"400px",paddingLeft:"2em",paddingTop:"2em",paddingBottom:"2em"}} className="uk-card-media-left uk-cover-container">
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt=""
              uk-cover="true"
            />
            <canvas width="600" height="400"></canvas>
          </div>
          <div className="">
            <div className="uk-card-body">
              <h3 className="uk-card-title">Media Left</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid="true"
        >
          <div  style={{width:"440px",height:"400px",paddingLeft:"2em",paddingTop:"2em",paddingBottom:"2em"}} className="uk-card-media-right uk-cover-container">
            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt=""
              uk-cover="true"
            />
            <canvas width="600" height="400"></canvas>
          </div>
          <div className="">
            <div className="uk-card-body">
              <h3 className="uk-card-title">Media Left</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </Layout>
  )
}

export default History
