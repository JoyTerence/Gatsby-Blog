/** @jsx jsx */
import { jsx, css, Input } from "theme-ui"

import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/blogs.css"
import HomeLayout from "../components/home-layout"
import "../components/search-util"

import { IconContext } from "react-icons"
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa"
import { MdSearch } from "react-icons/md"
import { fetchByTags, fetchByTopic } from "../components/search-util"
import { AnimatedTopicButton } from "../components/awesomebutton"
import Blog from "../components/blog"
import Tag from "../components/tag"
import NoPost from "../components/noPost"

const BlogPage = ({ data }) => {
  const [descorder, setDescOrder] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [tags, setTags] = useState([])
  const [topic, setTopic] = useState("Tech")
  const [nodes, setNodes] = useState(data.allMarkdownRemark.edges)

  const topics = ["Tech", /*"Music",*/ "Travel", "Misc"]
  const noPostDescription = "This seems wrong!! I need to write more..."

  useEffect(() => {
    setNodes(fetchByTopic(data.allMarkdownRemark.edges, topic))
    setTopic(topic)
  }, [data.allMarkdownRemark.edges, topic])

  const onclick = () => {
    setDescOrder(!descorder)
    setNodes(nodes.reverse())
  }

  var tagArray = null

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        e.target.value = ""
        tagArray = Array.from(new Set([...tags, searchTerm]))
        setNodes(fetchByTags(data.allMarkdownRemark.edges, tagArray))
        setTags(tags => tagArray)
      }
    }
  }

  const onSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const onSearchIconClick = () => {
    if (searchTerm !== "") {
      tagArray = Array.from(new Set([...tags, searchTerm]))
      setNodes(fetchByTags(data.allMarkdownRemark.edges, tagArray))
      setTags(tags => tagArray)
    }
  }

  const onSearchTagClick = index => {
    tagArray = tags
    tagArray.splice(index, 1)
    if (tagArray === undefined || tagArray.length === 0) {
      setNodes(fetchByTopic(data.allMarkdownRemark.edges, topic))
    } else {
      setNodes(fetchByTags(data.allMarkdownRemark.edges, tagArray))
    }
    setTags(tags => tagArray)
  }

  const onTopicClick = index => {
    var selectedTopic = topics[index]
    if (topic !== selectedTopic) {
      console.log("Setting topic to: " + selectedTopic)
      setNodes(fetchByTopic(data.allMarkdownRemark.edges, selectedTopic))
      setTopic(selectedTopic)
    }
  }

  return (
    <React.Fragment>
      <HomeLayout>
        <div sx={{ color: "primary" }}>
          <SEO title="Blog" />
          <div
            sx={{
              mt: 5,
              padding: "0.5em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              css={css({
                position: "absolute",
                top: "9px",
                right: "10%",
                zIndex: 99999,
                display: ["none", "flex"],
                fontSize: 2,
                borderBottom: "1px solid",
              })}
            >
              <Input
                sx={{ border: "none" }}
                type="text"
                placeholder="Search by tags..."
                onKeyDown={handleKeyDown}
                onChange={onSearchChange}
              />
              <div
                role="button"
                css={css({ outline: "none " })}
                onClick={onSearchIconClick}
                onKeyDown={onSearchIconClick}
                tabIndex={0}
              >
                <IconContext.Provider value={{ color: "primary", size: `2em` }}>
                  <MdSearch />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div
            sx={{
              ml: `auto`,
              mr: `auto`,
              maxWidth: `90%`,
            }}
            className="search-tags-container"
          >
            {tags.map((tag, index) => (
              <Tag
                tag={tag}
                index={index}
                onSearchTagClick={onSearchTagClick}
              />
            ))}
          </div>
          <div>
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "90%",
                ml: "auto",
                mr: "auto",
                padding: "0.5em",
              }}
              className="topics-container"
            >
              <div
                role="button"
                css={css({
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                })}
                onClick={onclick}
                onKeyDown={onclick}
                tabIndex={0}
              >
                <span sx={{ m: 1 }}>Sort</span>
                <IconContext.Provider
                  value={{ color: "primary", size: `1.5em` }}
                >
                  {descorder ? <FaSortAmountDown /> : <FaSortAmountUp />}
                </IconContext.Provider>
              </div>
              {topics.map((singleTopic, index) => (
                <AnimatedTopicButton
                  key={index}
                  selectedTopic={topic}
                  topic={singleTopic}
                  index={index}
                  onTopicClick={onTopicClick}
                />
              ))}
            </div>
          </div>
          {nodes.length === 0 ? (
            <NoPost description={noPostDescription} />
          ) : (
            <div></div>
          )}
          <div>
            {nodes
              .filter(function(node) {
                if (node.node.fields.slug === "/aboutme/") {
                  return false // Skip about-me page from being shown in blogs list
                } else {
                  return true
                }
              })
              .map(({ node }) => (
                <Blog key={node.id} node={node} />
              ))}
          </div>
        </div>
      </HomeLayout>
    </React.Fragment>
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
            topic
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
