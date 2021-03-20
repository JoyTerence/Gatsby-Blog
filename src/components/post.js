/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import React from "react"

const Post = ({ post }) => {
  const colorMode = useColorMode()[0]
  return (
    <React.Fragment>
      <div
        sx={{
          m: 5,
          ml: "auto",
          mr: "auto",
          color: `primary`,
          backgroundColor: `background`,
          maxWidth: `90%`,
          padding: `0.5em`,
        }}
        css={css({
          boxShadow:
            colorMode === "dark" ? "2px 2px 8px black" : "2px 2px 8px lavender",
        })}
        className="blog-post-container"
      >
        <h1>
          <center>{post.frontmatter.title}</center>
        </h1>
        <hr sx={{ backgroundColor: `primary` }} />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ textAlign: `justify` }}
        />
      </div>
    </React.Fragment>
  )
}

export default Post
