/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import React from "react"

const Post = ({ post }) => {
  const colorMode = useColorMode()[0]

  // Some ugly hacks for theming inside md code
  if (document.getElementsByClassName("token operator")[0]) {
    document.getElementsByClassName("token operator")[0].style.background =
      "none"
  }
  Array.from(
    document.getElementsByTagName("pre")
  ).forEach((item, index) => {
    item.style.color = "inherit"
  })

  Array.from(document.getElementsByClassName("gatsby-highlight")).forEach(
    (item, index) => {
      if (colorMode === "default") {
        item.children[0].style.background = "#f5f2f0"

        if (item.children[0].children[0].className == "language-unknown") {
          item.children[0].children[0].style.color = "black"
        }
      } else {
        item.children[0].style.background = "#383535"
        if (item.children[0].children[0].className == "language-unknown") {
          item.children[0].children[0].style.color = "ghostwhite"
        }
      }
      item.children[0].children[0].style.textShadow = "none"
    }
  )

  return (
    <React.Fragment>
      <div
        sx={{
          m: "80px auto 10px auto",
          borderRadius: "5px",
          color: `primary`,
          backgroundColor: `background`,
          maxWidth: `90%`,
          padding: `0.5em`,
        }}
        css={css({
          boxShadow:
            colorMode === "dark"
              ? "2px 2px 8px black"
              : "2px 2px 8px lightgray",
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
