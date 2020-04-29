// import {graphql} from "gatsby"

// export const data = graphql`
//    query{
//     allFile(filter: {relativeDirectory: {eq: "galery"}}) {
//     edges {
//       node {
//         childImageSharp {
//           fixed(width: 300, height: 400) {
//             originalName
//           }
//         }
//       }
//     }
//   }
//   }
// `
// const {edges} = data.allFile
// const compoCards = 
// {
//   title:"Hidromiel Acre", 
//   text:"fermento de miel de abeja 100% natural con durazno que posee un sabor agridulce", 
//   bottles:true,
//   image:edges[0].node.childImageSharp.fixed,
//   alt: edges[0].node.childImageSharp.fixed.originalName,
//   price:"1,080",
//   showButtons: true
// }

// //export {compoCards,data}