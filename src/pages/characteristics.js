import React from "react"
import { PageTitle } from "../components/Common/PageTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeCard from "../components/Common/LargeCard/LargeCard"
import Container from "../components/Common/Container"
import { useStaticQuery, graphql } from "gatsby"

const Characteristics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "chars" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 450, height: 320) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    }
  `)
  const right = "uk-flex-last@s uk-card-media-right uk-cover-container"
  const left = "uk-card-media-left uk-cover-container"
  return (
    <Layout>
      <SEO title="Hidromiel del rey Characteristics" />
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; Caracter&iacute;sticas</PageTitle>
        </div>
        <div style={{ padding: "2em" }}>
          <LargeCard
            image={data.allFile.edges[0]}
            side={left}
            content="La hidromiel se fermenta con tres ingredientes básicos: miel, levadura y agua y se distingue en su propio ramo de bebidas alcohólicas."
          />
          <LargeCard
            image={data.allFile.edges[1]}
            side={right}
            content="Dulce, seca y fuerte son algunas de sus clasificaciones , también se puede combinar con ingredientes como moras, durazno, sidra, entre otros."
          />
          <LargeCard
            image={data.allFile.edges[2]}
            side={left}
            content="La miel utilizada determina el sabor general de la hidromiel y puede variar segun el néctar y polen de una abeja ."
          />
          <LargeCard
            image={data.allFile.edges[3]}
            side={right}
            content="Metheglin es un tipo de hidromiel que se elabora con infusión de hierbas, utilizada como medicina alternatica para la digestión, ansiedad y depresión."
          />
          <LargeCard
            image={data.allFile.edges[4]}
            side={left}
            content="Porsee un agradable y burbujeante sabor agridulce "
          />
        </div>
      </Container>
    </Layout>
  )
}

export default Characteristics
