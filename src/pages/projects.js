/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

import "../styles/projects.css"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/seo"

import { graphql } from "gatsby"

import ProjectCard from "../components/card"
import { Row } from "react-bootstrap"
import HomeLayout from "../components/home-layout"

var _ = require("lodash")

const IndexPage = ({ data }) => {
  var dataNodes = data.allProjectsJson.edges.map(({ node }) => (
    <ProjectCard key={node.id} node={node} />
  ))

  var divNodes = _.chunk(dataNodes, 3).map(node => (
    <Row key={Math.random()}>{node}</Row>
  ))

  return (
    <React.Fragment>
      <HomeLayout>
        <SEO
          title="Projects"
          keywords={[`portfolio`, `gatsby`, `application`, `react`]}
        />
        <div
          sx={{ mt: 6, color: `primary`, backgroundColor: `background` }}
          className="main-bar-container"
        ></div>
        {divNodes}
      </HomeLayout>
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          Name
          Description
          Link
        }
      }
    }
  }
`
