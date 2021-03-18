import React from "react"

import { navigate } from "gatsby"

import { AwesomeButton } from "react-awesome-button"
import "../styles/awesome-button-social.css"
import { useColorMode } from "theme-ui"

const AnimatedButtonSocial = ({ fileDownload, type, url, children }) => {
  const colorMode = useColorMode()[0]
  return (
    <AwesomeButton
      className={type}
      style={{ margin: "1em" }}
      ripple
      size="medium"
      type={colorMode === "default" ? "primary" : "secondary"}
      onPress={() => (fileDownload ? window.open(url, "_self") : navigate(url))}
    >
      {children}
    </AwesomeButton>
  )
}

const AnimatedButtonMail = ({ url, children }) => {
  const colorMode = useColorMode()[0]
  return (
    <a href={url}>
      <AwesomeButton
        className="mail"
        style={{ margin: "1em" }}
        ripple
        size="medium"
        type={colorMode === "default" ? "primary" : "secondary"}
      >
        {children}
      </AwesomeButton>
    </a>
  )
}

export default AnimatedButtonSocial
export { AnimatedButtonMail }
