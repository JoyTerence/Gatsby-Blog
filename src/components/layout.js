/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import { IconContext } from "react-icons";
import { GiSpy, GiBookshelf } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { GoRepo } from "react-icons/go";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            minHeight: 250,
          }}
        >
          <main>{children}</main>
        </div>
        <footer style={{display: "flex", justifyContent: "space-between", margin:`0 auto`, maxWidth: 960, padding: `1em`}}>
          <Link to="/" target="_blank">
            <IconContext.Provider value={{color:`black`, size: `2em`}}>
              < GiSpy /> 
            </IconContext.Provider>
          </Link>
          <Link to="/projects">
            <IconContext.Provider value={{color: `royalblue`, size: `2em`}}>
              < GoRepo />
            </IconContext.Provider>
          </Link>
          <Link to="">
            <IconContext.Provider value={{color: `darkgoldenrod`, size: `2em`}}>
              < GiBookshelf />
            </IconContext.Provider>
          </Link>
          <Link to="/contact-me">
            <IconContext.Provider value={{ color:`#e03434`, size: `2em`}}>
              < MdContactMail />
            </IconContext.Provider>
          </Link>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
