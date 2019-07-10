import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Joy Barnes" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
    <p>On a quest to know all there is!!</p>
    <p> I love to solve problems, Code, DoTA and play the Uke.</p>
    <p style={{textAlign: `justify`}}>Currently employed as Senior Technical Associate @ Avaya Telecommunications, Bengaluru working on Amazing Unified Communication products such as Avaya Equinox, Zang.
      Worked on CI/CD, SSO for Avaya Equinox and added Voice control feature for the Avaya WebRTC.
    </p>
  </Layout>
)

export default IndexPage
