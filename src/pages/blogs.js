import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Badge from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

import "../components/blogs.css"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Page two" />
        <div>
          {/* <h4>
            {data.allMarkdownRemark.totalCount} Posts
          </h4> */}
          
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} style={{padding: `0.5em`}}>
              <Link style={{textDecoration: `none`}} to={node.fields.slug}>
                <div style={{display: `flex`, height: `8em`, flexDirection: "row"}}>
                  <div style={{flex: 10, backgroundColor: "lightcyan", padding: `0.25em`}}>
                    <h2 style={{color: `black`}}>{node.frontmatter.title}</h2>
                    <h5>{node.frontmatter.description}</h5>
                    <p></p>
                    <div style={{fontSize: `x-small`, padding: `0.5em`, margin: `0em`}}>
                      <Badge style={{ width: `fit-content`, backgroundColor: `#007bff`}} pill="true" variant="primary">
                        <span style={{color: "black", fontWeight: 700}}>Priam</span>
                      </Badge>
                    </div>
                    <p style={{fontSize: `x-small`, color: `gray`}}> {node.frontmatter.date} </p>
                  </div>
                  <div style={{display: `flex`, flex: 2, backgroundColor: "red", margin: `0 auto`}}>
                    <Img fluid={data.file.childImageSharp.fluid}/>
                  </div>
                </div>
              </Link>  
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: { eq: "dummy.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`