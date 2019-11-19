import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import Badge from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

import "../components/blogs.css"

const BlogPage = ({ data }) => {

  return (
    <HomeLayout>
      <SEO title="Blog" />
      <span className="main-title"> <b> Blogs </b> </span>
      <div className="main-bar-container"></div>
      <div>
        {data.allMarkdownRemark.edges.filter(function(node) {
          if (node.node.fields.slug === "/aboutme/") {
            return false // Skip about me page from being shown in blogs list
          }
          else {
            return true
          }
        }).map(({ node }) => (
          <div className="container" key={node.id}>
            <Link style={{textDecoration: `none`}} to={node.fields.slug}>
              <div className="blog-container">
                <div className="post-left-container">
                  <div className="title-container ">
                    <span className="title">{node.frontmatter.title}</span>
                  </div>
                  <div className="desc-container">
                    <span>{node.frontmatter.description}</span>
                  </div>
                  <div className="tag-container">
                    {node.frontmatter.tags.map(tag => 
                        <div key={Math.random()} style={{fontSize: `1vh`, margin: `0.5em`}}>
                          <Badge style={{ width: `max-content`, backgroundColor: `#007bff`}} pill="true" variant="primary">
                            <span style={{color: "black", fontWeight: 700}}>{tag}</span>
                          </Badge>
                        </div>
                    )}
                  </div>
                  <div className="date-container"> 
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
                fluid(maxWidth: 100, quality: 100) {
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
  }
`