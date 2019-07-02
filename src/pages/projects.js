import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/projects.css"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import { graphql } from "gatsby"

var _ = require('lodash');

const IndexPage = ({ data }) => {

    var dataNodes = data.allProjectsJson.edges.map(({ node }) => (
        <div key={node.id} style={{flex: 1}}>
            <Card style={{ height: `10em`, width: '18rem', display: `flex`, flexDirection: `column`}}>
                    <Card.Header style={{flex: 1}}>{node.name}</Card.Header>
                    <Card.Text className="description" style={{flex: 10}}>{node.Description}</Card.Text>
                    <a href={node.Link} style={{flex: 1, margin: `0 auto`, padding: `0.2em`}}>
                        <Button variant="link" size="sm">{node.Link}</Button>
                    </a>
            </Card>
        </div>
    ))

    console.log("*****************")
    console.log(dataNodes)
    
    var divNodes =  _.chunk(dataNodes, 2).map(y => 
        <div key={Math.random()} style={{flexDirection: `row`, display: `flex`, padding: `2em`}}> {y} </div>
    )

    console.log("------------------")
    console.log(divNodes)

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