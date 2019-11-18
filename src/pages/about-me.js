import React from "react";

import SEO from "../components/seo"
import { graphql } from "gatsby"

import HomeLayout from "../components/home-layout"
import '../components/about-me.css'

const AboutMePage = ({ data }) => {
    const htmlContent = data.allMarkdownRemark.edges.map(({ node }) => node.html)

    return (
        <HomeLayout>
            <SEO title="Joy Barnes" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
            <span className="main-title"> <b> About me </b> </span>
            <div className="main-bar-container"></div>
            <div className="about-me-card-container">
                <div className="about-me-card">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ textAlign: `justify`}} />
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutMePage

export const query = graphql`
  query {
    allMarkdownRemark( filter: { fileAbsolutePath: {regex : "\/aboutme/"} },) {
        edges {
          node {
            html
          }
        }
    }
}
`