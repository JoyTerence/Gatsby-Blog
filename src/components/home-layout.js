/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link} from "gatsby"
import { Location } from '@reach/router';

import "./homeLayout.css"
import { MdHome, MdAdd, MdClose, MdContactPhone } from "react-icons/md";
import { GiFiles, GiGears } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";
import { IconContext } from "react-icons";

import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';

const HomeLayout = ({ children }) => {

  const [isOpen, setOpen] = useState(false);

  return (
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
          <div className="main-container">
            {children} 
          </div>
          <footer>
            <Location>
              {
                ({ location }) => {
                  var showhomebutton = location.pathname !== '/'
                  return showhomebutton? 
                  <FloatingMenu
                    slideSpeed={500}
                    direction="up"
                    spacing={8}
                    isOpen={isOpen}
                  >
                    <MainButton
                      iconResting={<MdAdd style={{ fontSize: 30, color: "green"}} />}
                      iconActive={<MdClose style={{ fontSize: 30, color: "red" }}/>}
                      backgroundColor="white"
                      onClick={() => setOpen(!isOpen)}
                      size={56}
                    />
                    <ChildButton
                      icon={<IconContext.Provider value={{ color:`blue`}}><Link to="/"><AiTwotoneHome style={{ fontSize: 20 }}/></Link></IconContext.Provider>}
                      backgroundColor="white"
                      size={40}
                      onClick={() => console.log('Navigating to Home...')}
                    />
                    <ChildButton
                      icon={<IconContext.Provider value={{ color:`orange`}}><Link to="/blogs"><GiFiles style={{ fontSize: 20 }}/></Link></IconContext.Provider>}
                      backgroundColor="white"
                      size={40}
                      onClick={() => console.log('Navigating to Blogs...')}
                    />
                    <ChildButton
                      icon={<IconContext.Provider value={{ color:`green`, backgroundColor: 'white'}}><Link to="/projects"><GiGears style={{ fontSize: 20 }}/></Link></IconContext.Provider>}
                      backgroundColor="white"
                      size={40}
                      onClick={() => console.log('Navigating to Home...')}
                    />
                    <ChildButton
                      icon={<IconContext.Provider value={{ color:`grey`}}><Link to="/contact-me"><MdContactPhone style={{ fontSize: 20 }}/></Link></IconContext.Provider>}
                      backgroundColor="white"
                      size={40}
                      onClick={() => console.log('Navigating to Contacts...')}
                    />
                  </FloatingMenu> : <div></div>
                }
              }
            </Location>
          </footer>
        </>
      )}
    />
  )}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout