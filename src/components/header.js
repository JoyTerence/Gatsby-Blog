/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import PropTypes from "prop-types"
import React from "react"

import { navigate } from "gatsby"

import DarkModeToggle from "react-dark-mode-toggle"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()

  const headerColor = colorMode === "dark" ? "black" : "lavenderblush"
  const shadowColor = colorMode === "dark" ? "" : "5px 6px 6px #888888"

  return (
    <React.Fragment>
      <nav>
        <div
          style={{
            position: `fixed`,
            width: `100%`,
            top: 0,
            left: 0,
            zIndex: "1000",
            height: `60px`,
            backgroundColor: headerColor,
            boxShadow: shadowColor,
          }}
        >
          <div
            css={css({
              maxWidth: `container`,
              mx: `auto`,
              mt: 2,
              mr: 4,
              ml: 4,
            })}
          >
            <div
              css={css({
                display: `flex`,
                justifyContent: `space-between`,
              })}
            >
              <div
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: 5,
                  justifyContent: "flex-start",
                }}
              >
                <span
                  role="button"
                  tabIndex={0}
                  sx={{
                    ml: 2,
                    color: "primary",
                    justifyContent: "center",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => navigate("/")}
                  onKeyDown={() => navigate("/")}
                >
                  {" "}
                  {siteTitle}{" "}
                </span>
              </div>
              <div
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DarkModeToggle
                  onChange={() => {
                    setColorMode(colorMode === "default" ? "dark" : "default")
                  }}
                  checked={colorMode === "dark"}
                  size={60}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
