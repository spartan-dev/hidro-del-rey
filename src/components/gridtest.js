import React from "react"
import Cards from "./Common/Cards/Cards"
import Horn from '../images/assets/horn.jpg'
import Barrel from "../images/assets/barril.jpg"

import compoCards from "./Products.components/Composition"
const Gridtest = () => {
  console.log(compoCards)
  return (
    <div uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li uk-filter-control="[data-tags*='linea']">
          <a href="#">Linea</a>
        </li>
        <li uk-filter-control="[data-tags*='temporada']">
          <a href="#">Temporada</a>
        </li>
        <li uk-filter-control="[data-tags*='premium']">
          <a href="#">Premium</a>
        </li>
        <li uk-filter-control="[data-tags*='crystal']">
          <a href="#">Crystal</a>
        </li>
        <li uk-filter-control="[data-tags*='barril']">
          <a href="#">Barril</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-4@m uk-text-center"
        uk-grid="true"
      >
        {compoCards.length ? (
          compoCards.map((card, idx) => {
            return (
              <li data-tags={`${card.categoria}`} key={idx}>
                {/*                 <div className="uk-card uk-card-default uk-card-body">{card.title}</div>
                 */}
                <Cards
                  key={idx}
                  image={card.img}
                  title={card.title}
                  text={card.text}
                  bottles
                  price24={card.price24}
                  price12={card.price12}
                  showButtons
                  minicards
                />
              </li>
            )
          })
        ) : (
          <progress className="uk-progress" value="" max=""></progress>
        )}
        <li data-tags="crystal">
          <Cards
            title="Cuerno de Crystal"
            text="Cuerno de cristal con capacidad de 350 ml "
            image={Horn}
            botles={false}
            showButtons={false}
            showPrices
            minicards

          />
        </li>
        <li data-tags="barril">
          <Cards
            title="Barril Desechable"
            text="Barril salida de 
      petainer desechable con capacidad de 20 litros"
            image={Barrel}
            price="El precio de éste productopuede variar  pregunta por él en nuestras redes sociales"
            bottles={false}
            showButtons={false}
            showPrices
            minicards

          />
        </li>
      </ul>
    </div>
  )
}

export default Gridtest
