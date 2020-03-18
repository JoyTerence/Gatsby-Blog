import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css'

import "../components/blogs.css"
import HomeLayout from "../components/home-layout"
import '../components/search-util'

import { IconContext } from "react-icons";
import { TiDocumentText } from "react-icons/ti";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { MdSearch, MdClose } from "react-icons/md";
import searcher from "../components/search-util"

const BlogPage = ({ data }) => {

  const [descorder, setDescOrder] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [tags, setTags] = useState([])
  const [topic, setTopic] = useState("")
  const [nodes, setNodes] = useState(data.allMarkdownRemark.edges)

  const tagColors = [ "lightblue", "lightgreen", "lightsalmon", "lightyellow", "lightgrey", "lightred", "lightgreen" ]
  const topics = [ "Tech", "Music", "Travel", "Misc" ]

  const onclick = () => {
    setDescOrder(!descorder)
    setNodes(nodes.reverse())
  }

  var tagArray = null

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value !== "") {
        e.target.value = ""
        tagArray = Array.from(new Set([...tags, searchTerm]))
        setNodes(searcher(data.allMarkdownRemark.edges, tagArray))
        setTags(tags => tagArray)
      }
    }
  }

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const onSearchIconClick = () => {
    if (searchTerm !== "") {
      tagArray = Array.from(new Set([...tags, searchTerm]))
      setNodes(searcher(data.allMarkdownRemark.edges, tagArray))
      setTags(tags => tagArray)
    }
  }

  const onSearchTagClick = (index) => {
    tagArray = tags
    tagArray.splice(index, 1)
    if (tagArray === undefined || tagArray.length === 0) {
      setNodes(data.allMarkdownRemark.edges)
    }
    else {
      setNodes(searcher(data.allMarkdownRemark.edges, tagArray))
    }
    setTags(tags => tagArray)
  }

  const onTopicClick = (index) => {
    console.log("State: " + topic)
    console.log(topics[index])
    if (topic === "") {
      setTopic(topics[index])
    }
    else if(topic == topics[index]) {
      console.log("Same topic selected")
      setTopic("")
    }
    console.log(topic)
  }

  return (
    <HomeLayout>
      <SEO title="Blog" />
      <span className="main-title"> <b> Scribble.. Scribble.. </b> </span>
      <div className="main-bar-container"></div>
      <div className="sort-search-container">
        <div role="button" className="sort-container" onClick={onclick} onKeyDown={onclick} tabIndex={0}>
          <IconContext.Provider value={{color: `black`, size: `2em`}}>
            < TiDocumentText /> 
          </IconContext.Provider>
          <IconContext.Provider value={{color: `black`, size: `1.5em`}}>
            {descorder? < FaSortAmountDown />: <FaSortAmountUp />}
          </IconContext.Provider>
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search by tags..." onKeyDown={handleKeyDown}  onChange={onSearchChange}/>
          <div role="button" onClick={onSearchIconClick} onKeyDown={onSearchIconClick} tabIndex={0}>
            <IconContext.Provider value={{color: `black`, size: `2em`, }} >
              < MdSearch /> 
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="search-tags-container">
        {
          tags.map((tag, index) => 
            <div key={Math.random()} className="search-tags">
              <span style={{color: "black", fontWeight: 500}}>{tag}</span>
              <div role="button" onClick={() => onSearchTagClick(index)}  onKeyDown={() => onSearchTagClick(index)} tabIndex={0} >
                <IconContext.Provider value={{color: `black`, size: `1em`}}>
                  < MdClose />
                </IconContext.Provider>
              </div>
            </div>
        )}
      </div>
      <div className="topics-container">
        {
          topics.map((tag, index) => 
            <div key={Math.random()} className="topic" role="button" onClick={() => onTopicClick(index)}>
              {tag}
            </div>
        )}
      </div>
      <div>
        {nodes.filter(function(node) {
          if (node.node.fields.slug === "/aboutme/") {
            return false // Skip about-me page from being shown in blogs list
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
                    {node.frontmatter.tags.map((tag, index) => 
                        <div key={Math.random()} style={{fontSize: `1vh`, margin: `0.5em`}}>
                          <Badge style={{ width: `max-content`, backgroundColor: tagColors[index]}} pill="true" variant="primary">
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