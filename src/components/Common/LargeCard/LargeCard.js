import React from "react"
import Img from "gatsby-image"

import {
  ContainerLargeCard,
  LargeCardPortrait,
  CardContent,
} from "./styledLargeCard"
const LargeCard = ({ image,side, content }) => {
  return (
    <ContainerLargeCard>
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid="true"
      >
        <div
          style={{
            // width: "440px",
            // height: "400px",
            paddingLeft: "2em",
            paddingTop: "2em",
            paddingBottom: "2em",
          }}
          className={side}
        >
          <Img
            fixed={image.node.childImageSharp.fixed}
            alt={image.node.childImageSharp.originalName}
            uk-cover="true"
          />
          {/* <canvas width="600" height="400"></canvas> */}
        </div>

        <CardContent className="uk-card-body">
          <p>{content}</p>
        </CardContent>
      </div>
    </ContainerLargeCard>
  )
}

export default LargeCard
