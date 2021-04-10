import React from "react"

import AnimatedButtonSocial, {
  AnimatedButtonMail,
} from "../components/awesomebuttonsocial"
import getIcon from "../components/icons"

const ContactButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AnimatedButtonSocial
        type="linkedin"
        fileDownload={false}
        url={"https://www.linkedin.com/in/joyterencebarnes"}
      >
        {getIcon({
          type: "linkedin",
        })}{" "}
        LinkedIn
      </AnimatedButtonSocial>
      <AnimatedButtonSocial
        type="github"
        fileDownload={false}
        url={"https://github.com/JoyTerence"}
      >
        {getIcon({
          type: "github",
        })}{" "}
        GitHub
      </AnimatedButtonSocial>
      <AnimatedButtonMail url={"mailto:joyterencebarnes@gmail.com"}>
        {getIcon({
          type: "mail",
        })}{" "}
        GMail
      </AnimatedButtonMail>
      <AnimatedButtonSocial
        type="facebook"
        fileDownload={false}
        url={"https://www.facebook.com/joy.terence.9"}
      >
        {getIcon({
          type: "facebook",
        })}{" "}
        Facebook
      </AnimatedButtonSocial>
      <AnimatedButtonSocial
        type="twitter"
        fileDownload={false}
        url={"https://twitter.com/terence_barnes"}
      >
        {getIcon({
          type: "twitter",
        })}
        Twitter
      </AnimatedButtonSocial>
      <AnimatedButtonSocial
        type="instagram"
        className="instagram"
        fileDownload={false}
        url={"https://www.instagram.com/joy.terence"}
      >
        {getIcon({
          type: "instagram",
        })}
        Instagram
      </AnimatedButtonSocial>
    </div>
  )
}

export default ContactButtons
