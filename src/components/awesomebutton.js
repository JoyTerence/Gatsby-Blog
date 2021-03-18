import React from "react"

import { navigate } from "gatsby"

import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"
import "react-awesome-button/dist/themes/theme-c137.css"
import "../styles/awesome-button.css"
import { useColorMode } from "theme-ui"

const AnimatedButton = ({ fileDownload, url, children }) => {
  const colorMode = useColorMode()[0]
  return (
      <AwesomeButton
        ripple
        size="medium"
        type={colorMode === "default" ? "primary" : "secondary"}
        onPress={() =>
          fileDownload ? window.open(url, "_target") : navigate(url)
        }
      >
        {children}
      </AwesomeButton>
  )
}

export default AnimatedButton
