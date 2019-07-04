import React from "react"

import "../components/projects.css"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import { IconContext } from "react-icons"
import { GoLogoGithub } from "react-icons/go"

import ProjectCard from "../components/card"

var _ = require('lodash');

const IndexPage = ({ data }) => {

    var dataNodes = data.allProjectsJson.edges.map(({ node }) => (
        < ProjectCard project={node} />
    ))

    // console.log("*****************")
    // console.log(dataNodes)
    
    var divNodes =  _.chunk(dataNodes, 2).map(y => 
        <div key={Math.random()} style={{flexDirection: `row`, display: `flex`, padding: `2em`}}> {y} </div>
    )

    // console.log("------------------")
    // console.log(divNodes)

    return(
        <Layout>
            <SEO title="Home" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
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
                    name
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