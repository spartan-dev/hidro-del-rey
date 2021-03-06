import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeCard from "../components/Common/LargeCard/LargeCard"
import Container from "../components/Common/Container"
import { PageTitle } from "../components/Common/PageTitle"
import { useStaticQuery, graphql } from "gatsby"
const History = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "history" } }) {
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
      <SEO title="Hidromiel History" />
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; Historia</PageTitle>
        </div>
        <div style={{ padding: "2em" }}>
          <LargeCard
            image={data.allFile.edges[0]}
            side={left}
            content="El primer lote de hidromiel fue accidental como muchos de los grandes descubrimientos, nace a través de lo inesperado."
          />
          <LargeCard
            image={data.allFile.edges[1]}
            side={right}
            content="Conocido como el “néctar de los dioses” en la antigua grecia , se creía que el hidromiel era rocío envíado de los cielos y recogido por las abejas."
          />
          <LargeCard
            image={data.allFile.edges[2]}
            side={left}
            content="En la mitología Nórdica “heidrum” era una cabra que amamantaba a los dioses con hidromiel."
          />
          <LargeCard
            image={data.allFile.edges[3]}
            side={right}
            content="Vasijas de cerámica sugieren la evidencia de fermentación de hidromiel. Globalmente popular entre vikingos, mayas, egipcios, griegos y romanos."
          />
          <LargeCard
            image={data.allFile.edges[4]}
            side={left}
            content="El origen de la “luna de miel” surge de la tradición medieval de beber vino de miel para un ciclo de luna llena después de un nuevo matrimonio."
          />
        </div>
      </Container>
    </Layout>
  )
}

export default History
