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
            <div className="container" key={node.id}>
              <Link style={{textDecoration: `none`}} to={node.fields.slug}>
                <div className="blog-container">
                  <div className="post-left-container">
                    <div style={{fontSize: `3vh`, fontWeight: 700, flex: 2,color: `black`, height: `fit-content`}}>
                      <span>{node.frontmatter.title}</span>
                    </div>
                    <div style={{fontSize: `2vh`, flex: 4}}>
                      <span>{node.frontmatter.description}</span>
                    </div>
                    <div style={{flex: 1, fontSize: `1vh`, padding: `0.5em`, margin: `0em`}}>
                      <Badge style={{ width: `fit-content`, backgroundColor: `#007bff`}} pill="true" variant="primary">
                        <span style={{color: "black", fontWeight: 700}}>Priam</span>
                      </Badge>
                    </div>
                    <div style={{flex: 1, fontSize: `1vh`, color: `gray`}}> <span>{node.frontmatter.date}</span>
                    
                    </div>
                  </div>
                  <div className="post-right-container">
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