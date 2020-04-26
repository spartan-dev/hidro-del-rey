import React from 'react'
import { PageTitle } from "../components/Common/PageTitle"
import Layout from "../components/layout"
import Container from "../components/Common/Container"
import SEO from "../components/seo"
const Products = () => {
  return (
    <Layout>
      <SEO title="Hidromiel del rey Products"/>
      <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; Productos </PageTitle>
        </div>
      </Container>
    </Layout>
  )
}

export default Products
