/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link} from "gatsby"

import "./homeLayout.css"

import { MdHome } from "react-icons/md";
import { IconContext } from "react-icons";

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
      <>
        {/* Add <HEADER> */}
        <div className="main-container">
          {children} 
        </div>
        <footer>
          <Link to="/" target="_blank">
            <div className="home-card">
              <IconContext.Provider value={{color:`#0077b5`, size: `3em`}}>
                < MdHome />
              </IconContext.Provider>
            </div>
          </Link>
        </footer>
      </>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout