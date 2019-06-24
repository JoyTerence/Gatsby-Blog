import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `gatsby`, `application`, `react`]} />
        {/* {data.allProjectsJson.edges.map(({node}) => (
            <div key={node.id}>
                <h1>{node.name}</h1>
                <h2>{node.Description}</h2>
                <h3>{node.Link}</h3>
            </div>
        ))} */}
        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <Card xs={8} border="primary" style={{ flex: 1, width: '16rem' }}>
            <Img fixed={data.file.childImageSharp.fixed} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card border="primary" style={{ flex: 1, width: '16rem' }}>
            <Img fixed={data.file.childImageSharp.fixed} /> 
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card border="primary" style={{ flex: 1, width: '16rem' }}>
            <Img fixed={data.file.childImageSharp.fixed} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card border="primary" style={{ flex: 1, width: '16rem' }}>
            <Img fixed={data.file.childImageSharp.fixed} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
        
  </Layout>
)

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