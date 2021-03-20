/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import theme from "../gatsby-plugin-theme-ui"

import React from "react"

import { Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

import { IconContext } from "react-icons"
import { FaGithubAlt } from "react-icons/fa"

const ProjectCard = ({ node }) => {
  const [hover, setHover] = React.useState(false)
  const colorMode = useColorMode()[0]

  const onHoverStart = () => {
    setHover(true)
  }

  const onHoverEnd = () => {
    setHover(false)
  }

  console.log(theme)

  const bottomBorderColor =
    colorMode === "dark"
      ? theme.colors.modes.dark.primary
      : theme.colors.primary

  return (
    <React.Fragment>
      <Col key={node.id} style={{ padding: `1em` }}>
        <div
          role="button"
          sx={{ color: `primary`, backgroundColor: `background` }}
          css={css({
            boxShadow:
              colorMode === "dark"
                ? "2px 2px 8px black"
                : "2px 2px 8px lavender",
          })}
          className="projectCard"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          tabIndex={0}
        >
          <Card.Header
            sx={{
              fontWeight: `bold`,
              height: `40%`,
              padding: `1em`,
              whiteSpace: `nowrap`,
              overflow: `hidden`,
              textOverflow: `ellipsis`,
            }}
            css={{ borderBottom: "1px solid " + bottomBorderColor }}
            className="projectName"
          >
            {node.Name}
          </Card.Header>
          <Card.Text className="projectDescription">
            {node.Description}
          </Card.Text>
          <a href={node.Link} className="projectLink">
            {hover ? (
              <Button size="sm"> GitHub Link </Button>
            ) : (
              <IconContext.Provider value={{ size: `1.5em` }}>
                <span>
                  <FaGithubAlt />
                </span>
              </IconContext.Provider>
            )}
          </a>
        </div>
      </Col>
    </React.Fragment>
  )
}

export default ProjectCard
