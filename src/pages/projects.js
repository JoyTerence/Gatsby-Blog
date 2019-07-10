import React from "react"

import "../components/projects.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import ProjectCard from "../components/card"
import { Row } from "react-bootstrap"

var _ = require('lodash');

const IndexPage = ({ data }) => {

    var dataNodes = data.allProjectsJson.edges.map(({ node }) => (
        < ProjectCard key = {node.id} project={node} /> 
    ))

    // console.log("*****************")
    // console.log(dataNodes)
    
    var divNodes =  _.chunk(dataNodes, 2).map(y => 
        <Row key={Math.random()}>
            {y}
        </Row>
    )

    // console.log("------------------")
    // console.log(divNodes)

    return(
        <Layout>
            <SEO title="Joy Barnes" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
            {divNodes}
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query{
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
        file(relativePath: { eq: "dummy.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 300, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
    }
`