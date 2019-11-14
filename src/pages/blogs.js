import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import Badge from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

import "../components/blogs.css"

const BlogPage = ({ data }) => {

  // TODO: fix layout bug for iPad Pro screens.

  return (
    <HomeLayout>
      <SEO title="Page two" />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="container" key={node.id}>
              <Link style={{textDecoration: `none`}} to={node.fields.slug}>
                <div className="blog-container">
                  <div className="post-left-container">
                    <div className="title-container ">
                      <span className="title">{node.frontmatter.title}</span>
                    </div>
                    <div style={{fontSize: `2vh`, flex: 4, paddingLeft: `0.25em`}}>
                      <span>{node.frontmatter.description}</span>
                    </div>
                    <div style={{display: `flex`, flexDirection: `row`, flex: 1}}>
                      {node.frontmatter.tags.map(tag => 
                          <div key={Math.random()} style={{fontSize: `1vh`, margin: `0.5em`}}>
                            <Badge style={{ width: `fit-content`, backgroundColor: `#007bff`, paddingLeft: `0.25em`}} pill="true" variant="primary">
                              <span style={{color: "black", fontWeight: 700}}>{tag}</span>
                            </Badge>
                          </div>
                      )}
                    </div>
                    <div style={{flex: 1, fontSize: `1vh`, color: `gray`, paddingLeft: `0.6em`, verticalAlign: `-webkit-baseline-middle`}}> 
                      <span>{node.frontmatter.date}</span>
                    </div>
                  </div>
                  <div className="post-right-container">
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                  </div>
                </div>
              </Link>  
            </div>
          ))}
        </div>
    </HomeLayout>
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
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
        fluid(maxWidth: 100, quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`