import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import Post from "../components/post"

import "./blog-post.css"

export default ({ data }) => {
  return (
    <HomeLayout>
      <Post post={data.markdownRemark} />
    </HomeLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
