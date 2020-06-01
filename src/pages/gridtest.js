import React from 'react'
import { PageTitle } from "../components/Common/PageTitle"
import Layout from "../components/layout"
import Container from "../components/Common/Container" 
import Cards from '../components/Common/Cards/Cards'
import {
  MainContainer,
  BottonSection,
  BigButton,
  CardSection,
  TextAsideContainer,
  AsideTextSection
} from "../components/Products.components/productsStyles"
import {graphql,StaticQuery} from 'gatsby'
const Gridtest = () => {
  return (
  <Layout>
     <Container className="uk-container uk-container-xlarge" uk-grid="true">
        <div>
          <PageTitle>Inicio &#62; Productos </PageTitle>
        </div>
        <div uk-filter="target: .js-filter">

    <ul className="uk-subnav uk-subnav-pill">
        <li uk-filter-control="[data-tags*='white']"><a href="#">White</a></li>
        <li uk-filter-control="[data-tags*='blue']"><a href="#">Blue</a></li>
        <li uk-filter-control="[data-tags*='black']"><a href="#">Black</a></li>
        <li uk-filter-control="[data-tags*='dark']"><a href="#">Dark Colors</a></li>
    </ul>

    <ul className="js-filter uk-child-width-1-2 uk-child-width-1-4@m uk-text-center" uk-grid="true">
        <li data-tags="white">
{/*             <div className="uk-card uk-card-default uk-card-body">Item</div>
 */}            <Cards/>
        </li>
        <li data-tags="blue dark">
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="white">
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="white">
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
            <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
            <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
            <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
            <Cards/>
        </li>
        <li data-tags="white">
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
            <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
            <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
    </Container>
  </Layout>
  )
}

export default Gridtest
