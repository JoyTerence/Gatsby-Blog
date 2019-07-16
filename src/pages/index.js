import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Joy Barnes" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
    <div>On a quest to know all there is!!</div>
    <br></br>
    <div> I love to solve problems, Code, DoTA <span style={{width: `1em`, height:`1em`, display:  `inline-block`}}><Img fluid={data.dota2.childImageSharp.fluid} /></span> and play the Uke.
      <span style={{width: `1em`, height:`1em`, display: `inline-block`}}><Img fluid={data.ukulele.childImageSharp.fluid} /></span>
    </div>
    <br></br>
    <div style={{textAlign: `justify`}}>Currently employed as Senior Technical Associate @ Avaya Telecommunications, Bengaluru working on Unified Communication products such as <a href="https://support.avaya.com/products/P1572/avaya-equinox-for-windows/" style={{textDecoration: `none`}}>Avaya Equinox</a>, <a href="https://www.zang.io/" style={{textDecoration: `none`}}>Zang</a>.
      Worked on CI/CD, SSO for Avaya Equinox and added Voice control feature for the Avaya WebRTC.
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    ukulele: file(relativePath: { eq: "ukulele.png" }) {
      childImageSharp {
        fluid(maxWidth: 20, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dota2: file(relativePath: { eq: "dota2.png" }) {
      childImageSharp {
        fluid(maxWidth: 20, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`