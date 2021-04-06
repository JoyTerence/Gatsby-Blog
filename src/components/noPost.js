/** @jsx jsx */
import { jsx, useColorMode, css } from "theme-ui"

import React from "react"

const NoPost = ({ description }) => {
  const colorMode = useColorMode()[0]
  return (
    <React.Fragment>
      <div
        sx={{
          mt: 4,
          ml: "auto",
          mr: "auto",
          color: `primary`,
          backgroundColor: `background`,
          maxWidth: `90%`,
          padding: `0.5em`,
        }}
        css={css({
          boxShadow:
            colorMode === "dark" ? "2px 2px 8px black" : "2px 2px 8px lightgrey",
        })}
        className="no-post-disclaimer"
      >
        {description}
      </div>
    </React.Fragment>
  )
}

export default NoPost
