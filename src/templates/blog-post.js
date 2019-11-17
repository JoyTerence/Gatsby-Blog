import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/home-layout"

import "./blog-post.css"

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <HomeLayout>
            <div className="blog-post-container">
                <h1><center>{post.frontmatter.title}</center></h1>
                <br />
                <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ textAlign: `justify`}} />
            </div>
        </HomeLayout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`