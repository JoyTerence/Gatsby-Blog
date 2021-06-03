/** @jsx jsx */
import { jsx, css, useColorMode } from "theme-ui"

import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { MdWork, MdSchool, MdStar } from "react-icons/md"

import "./timeline.css"

const getThemes = mode => {
  let customTheme = theme.colors.modes.light
  let additionalTheme = {
    border: "2px solid #6d64ff",
    boxShadow: "0 3px 0 #6d64ff",
  }
  let arrowTheme = { borderRight: "7px solid #6d64ff" }
  let iconTheme = {
    background: "white",
    color: "white",
    boxShadow: "0 0 0 4px #6d64ff",
  }
  let customColor = "#6d64ff"

  if (mode === "dark") {
    customTheme = theme.colors.modes.dark
    additionalTheme = {
      border: "2px solid #a4a9cf",
      boxShadow: "0 3px 0 #a4a9cf",
    }
    arrowTheme = { borderRight: "7px solid #a4a9cf" }
    iconTheme = {
      background: "#1d1d1d",
      color: "white",
      boxShadow: "0 0 0 4px #a4a9cf",
    }
    customColor = "#a4a9cf"
  }
  return {
    cardTheme: { ...customTheme, ...additionalTheme },
    iconTheme: iconTheme,
    arrowTheme: arrowTheme,
    customColor: customColor,
  }
}

const Timeline = () => {
  const colorMode = useColorMode()[0]

  const { cardTheme, iconTheme, arrowTheme, customColor } = getThemes(colorMode)

  return (
    <React.Fragment>
      <div sx={{ color: "primary" }} className="timeline-wrapper">
        <VerticalTimeline
          layout="1-column-left"
          css={css({
            "::before": {
              background: customColor,
            },
          })}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={cardTheme}
            contentArrowStyle={arrowTheme}
            date="2021 - present"
            iconStyle={{ ...iconTheme, color: "#e24f4f" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Avaya, Bengaluru
            </h5>
            <p>CPaaS, Avaya Cloud Office</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={cardTheme}
            contentArrowStyle={arrowTheme}
            date="2019 - 2021"
            iconStyle={{ ...iconTheme, color: "#e24f4f" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Avaya, Bengaluru
            </h5>
            <p>CPaaS, Avaya Cloud Office</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            contentStyle={cardTheme}
            contentArrowStyle={arrowTheme}
            iconStyle={{ ...iconTheme, color: "#e24f4f" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Technical Associate
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Avaya, Bengaluru
            </h5>
            <p>Avaya IX Workplace,</p>
            <p style={{ margin: 0, padding: 0 }}>Avaya WebRTC,</p>
            <p style={{ margin: 0, padding: 0 }}>
              Avaya CSDK
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2017"
            contentStyle={cardTheme}
            contentArrowStyle={arrowTheme}
            iconStyle={{ ...iconTheme, color: "grey" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              B.E in Computer Science
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              R.V College Of Engineering, Bengaluru
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              ...iconTheme,
              background: "rgb(16, 204, 82)",
            }}
            icon={<MdStar />}
          />
        </VerticalTimeline>
      </div>
    </React.Fragment>
  )
}

export default Timeline
