/** @jsx jsx */
import { jsx, useColorMode, css, Styled } from "theme-ui"

import PropTypes from "prop-types"
import React from "react"

import { navigate } from "gatsby"

import DarkModeToggle from "react-dark-mode-toggle"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <React.Fragment>
      <nav>
        <Styled
          css={css({
            position: `fixed`,
            width: `100%`,
            top: 0,
            left: 0,
            zIndex: "1000",
            height: `60px`,
            backgroundColor: `background`,
          })}
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
                  sx={{ ml: 2, justifyContent: "center", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                  onkeydown={() => navigate("/")}
                >
                  {" "}
                  {siteTitle}{" "}
                </span>
              </div>
              <DarkModeToggle
                onChange={() => {
                  setColorMode(colorMode === "default" ? "dark" : "default")
                }}
                checked={colorMode === "dark"}
                size={60}
              />
            </div>
          </div>
        </Styled>
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
