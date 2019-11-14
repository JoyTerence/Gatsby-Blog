/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./homeLayout.css"

import { IconContext } from "react-icons";
import { MdContactMail } from "react-icons/md";
import { GoRepo, GoCloudDownload } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";

const HomeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteNameQuery {
        site {
          siteMetadata {
            name
          }
        }
        profilepic: file(relativePath: { eq: "profilepic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {/* Add <HEADER> */}
        <div className="main-container">
          <div className="main-top-container">
            <div className="profile-container" className="main-top-left-container">
              <Link to="/" target="_blank">
                <div className="profile home-card">
                  <div className="profile-img-container">
                    <Img fluid={data.profilepic.childImageSharp.fluid} />
                  </div>
                  <div className="profile-desc-container">
                    <b>Joy Barnes</b>
                    <p>Senior Technical Associate, Avaya Bengaluru</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="main-top-right-container">
              <div className="blog-link-container">
                <Link to="/blogs">
                  <div className="blogs home-card">
                    <div className="icon-container">
                      <IconContext.Provider value={{color: `darkgoldenrod`, size: `3em`}}>
                        < GiBookshelf />
                      </IconContext.Provider>
                    </div>
                    <span className="icon-desc-container"><b>Blogs</b></span>
                  </div>
                </Link>
              </div>
              <div className="contact-download-container">
                <div className="contact-container">
                  <Link to="/contact-me">
                    <div className="contacts home-card">
                      <div className="icon-container">
                        <IconContext.Provider value={{ color:`#e03434`, size: `3em`}}>
                          < MdContactMail />
                        </IconContext.Provider>
                      </div>
                      <span className="icon-desc-container"><b>Contact me here!</b></span>
                    </div>
                  </Link>
                </div>
                <div className="download-container">
                  <a href="./joyterencebarnes.pdf" download>  
                    <div className="downloads home-card">
                      <div className="icon-container">
                        <IconContext.Provider value={{ color:`black`, size: `3em`}}>
                            < GoCloudDownload />
                        </IconContext.Provider>
                      </div>
                      <span className="icon-desc-container"><b>Download my resume!</b></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bot-container">
            <div className="projects home-card">
              <div className="icon-container-project">
                <IconContext.Provider value={{color: `royalblue`, size: `3em`}}>
                  < GoRepo />
                </IconContext.Provider>
              </div>
              <span className="icon-desc-container"><b>Projects</b></span>
            </div>
          </div>
        </div>

      </>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout