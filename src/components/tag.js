/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

import React from "react"

import { IconContext } from "react-icons"
import { MdClose } from "react-icons/md"

const Tag = ({ tag, index, onSearchTagClick }) => {
  const colorMode = useColorMode()[0]
  return (
    <React.Fragment>
      <div
        sx={{
          color: "primary",
          backgroundColor: colorMode === "dark" ? "#333b3d" : "#779dee",
          boxShadow:
            colorMode === "dark" ? "2px 2px 8px black" : "2px 2px 8px dodgerblue",
        }}
        key={Math.random()}
        className="search-tags"
      >
        <span>{tag}</span>
        <div
          role="button"
          className="tag-close-btn"
          onClick={() => onSearchTagClick(index)}
          onKeyDown={() => onSearchTagClick(index)}
          tabIndex={0}
        >
          <IconContext.Provider value={{ color: `black`, size: `1em` }}>
            <MdClose />
          </IconContext.Provider>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tag
