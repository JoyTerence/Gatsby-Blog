/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link} from "gatsby"
import { Location } from '@reach/router';

import "./homeLayout.css"
import { IconContext } from "react-icons";
import { MdHome } from "react-icons/md";

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
          <Location>
            {
              ({ location }) => {
                var showhomebutton = location.pathname != '/'
                console.log(showhomebutton)
                return showhomebutton? 
                  <Link to="/" target="_blank">
                    <div className="home-card">
                      <div className="home-nav">
                        <IconContext.Provider value={{color:`#0077b5`, size: `2em`}}>
                          < MdHome />
                        </IconContext.Provider>
                      </div>
                    </div>
                  </Link> : <div></div>
              }
            }
          </Location>
        </footer>
      </>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout