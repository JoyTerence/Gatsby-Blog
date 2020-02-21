import React from "react"

import "../components/projects.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import SEO from "../components/seo"

import { graphql } from "gatsby"

import ProjectCard from "../components/card"
import { Row } from "react-bootstrap"
import HomeLayout from "../components/home-layout";

var _ = require('lodash');

const IndexPage = ({ data }) => {

    var dataNodes = data.allProjectsJson.edges.map(( {node} ) => (
        < ProjectCard key = {node.id} project={node}/> 
    ))

    // console.log("*****************")
    // console.log(dataNodes)
    
    var divNodes =  _.chunk(dataNodes, 3).map(node => 
        <Row key={Math.random()}>
            {node}
        </Row>
    )

    // console.log("------------------")
    // console.log(divNodes)

    return(
        <HomeLayout>
            <SEO title="Joy Barnes" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
            <span className="main-title"> <b> Projects </b> </span>
            <div className="main-bar-container"></div>
            {divNodes}
        </HomeLayout>
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
    }
`