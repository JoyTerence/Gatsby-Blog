/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "katex/dist/katex.min.css"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

import Header from "./header"

const HomeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteNameQuery {
        site {
          siteMetadata {
            name
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header siteTitle={data.site.siteMetadata.name} />
          <div
            sx={{
              margin: 5,
              fontSize: 4,
            }}
          >
            {children}
          </div>
          <footer />
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
