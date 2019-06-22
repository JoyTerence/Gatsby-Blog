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
import { GoOctoface } from "react-icons/go";
import { FaLinkedin, FaUserAlt, FaMedium, FaFacebook } from "react-icons/fa";
import { GiSpy } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";

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
          }}
        >
          <main>{children}</main>
          <footer style={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/" target="_blank">
              <IconContext.Provider value={{color:`black`, size: `2em`}}>
                < GiSpy /> 
              </IconContext.Provider>
            </Link>
            <a href="https://in.linkedin.com/in/joyterencebarnes" target="_blank">
              <IconContext.Provider value={{color:`#0077b5`, size: `2em`}}>
                < FaLinkedin />
              </IconContext.Provider>
            </a>
            <a href="https://github.com/JoyTerence" target="_blank">
              <IconContext.Provider value={{ color:`#24292e`, size: `2em`}}>
                < GoOctoface />
              </IconContext.Provider>
            </a>
            <a href="https://medium.com/@joyterencebarnes" target="_blank">
              <IconContext.Provider value={{ color:`black`, size: `2em`}}>
                < FaMedium />
              </IconContext.Provider>
            </a>
            <a href="https://www.facebook.com/joy.terence.9" target="_blank">
              <IconContext.Provider value={{ color:`#365da8`, size: `2em`}}>
                < FaFacebook />
              </IconContext.Provider>
            </a>
            <Link to="/contact-me">
              <IconContext.Provider value={{ color:`#e03434`, size: `2em`}}>
                < MdContactMail />
              </IconContext.Provider>
            </Link>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
