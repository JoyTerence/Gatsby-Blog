/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import React from "react"

import Badge from "react-bootstrap/Badge"
import Img from "gatsby-image"
import { Link } from "gatsby"

const tagColors = [
  "lightblue",
  "lightgreen",
  "lightsalmon",
  "lightyellow",
  "lightgrey",
  "lightred",
  "lightgreen",
]

const Blog = ({ node }) => {
  const colorMode = useColorMode()[0]
  return (
    <React.Fragment>
      <div
        sx={{ color: "primary", maxWidth: "90%" }}
        className="container"
        key={node.id}
      >
        <Link style={{ textDecoration: `none` }} to={node.fields.slug}>
          <div
            sx={{ backgroundColor: "background" }}
            css={css({
              boxShadow:
                colorMode === "dark"
                  ? "2px 2px 8px black"
                  : "2px 2px 8px lightgrey",
            })}
            className="blog-container"
          >
            <div className="post-left-container">
              <div className="title-container ">
                <span sx={{ color: "primary" }} className="title">
                  {node.frontmatter.title}
                </span>
              </div>
              <div className="desc-container">
                <span sx={{ color: "primary", display: "block", fontSize: [0], lineHeight: 1.5 }}>{node.frontmatter.description}</span>
              </div>
              <div sx={{ color: "primary" }} className="tag-container">
                {node.frontmatter.tags.map((tag, index) => (
                  <div
                    key={Math.random()}
                    style={{ fontSize: `1vh`, margin: `0.5em` }}
                  >
                    <Badge
                      style={{
                        width: `max-content`,
                        backgroundColor: tagColors[index],
                      }}
                      pill="true"
                      variant="primary"
                    >
                      <span style={{ color: "black", fontWeight: 700 }}>
                        {tag}
                      </span>
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="date-container">
                <span>{node.frontmatter.date}</span>
              </div>
            </div>
            <div className="post-right-container">
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Blog
