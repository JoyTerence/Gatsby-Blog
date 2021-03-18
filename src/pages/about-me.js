/** @jsx jsx */
import { jsx, css, Heading } from "theme-ui"

import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Fade from "react-reveal/Fade"

import SEO from "../components/seo"
import HomeLayout from "../components/home-layout"
import Avatar from "../components/avatar"
import Timeline from "../components/timeline"
import ContactButtons from "../components/contacts"

const AboutMePage = ({ data }) => {
  return (
    <React.Fragment>
      <HomeLayout>
        <SEO title="Joy Barnes" keywords={[`portfolio`, `about-me`]} />
        <div
          sx={{
            color: "primary",
          }}
        >
          <div
            css={css({
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-around`,
              height: "500px",
            })}
          >
            <div
              css={css({
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                flex: 1,
              })}
            >
              <div>
                <Avatar />
              </div>
            </div>
            <div
              css={css({
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                flex: 1.5,
              })}
            >
              <span>
                <Heading sx={{ fontSize: 6 }}>
                  On a quest to know all there is!!
                </Heading>
                <br />
                <Fade left>
                  <h1>What I love to do</h1>
                </Fade>
                <div>
                  <Fade left cascade>
                    <h4 sx={{ display: `flex`, alignItems: "center" }}>
                      <Img fixed={data.problem.childImageSharp.fixed} />
                      <span sx={{ ml: 4 }}>Solve random problems</span>
                    </h4>
                    <h4 sx={{ display: `flex`, alignItems: "center" }}>
                      <Img fixed={data.coding.childImageSharp.fixed} />
                      <span sx={{ ml: 4 }}> Programming </span>
                    </h4>
                    <h4 sx={{ display: `flex`, alignItems: "center" }}>
                      <Img fixed={data.dota.childImageSharp.fixed} />
                      <span sx={{ ml: 2 }}> Dota </span>
                    </h4>
                    <h4 sx={{ display: `flex`, alignItems: "center" }}>
                      <Img fixed={data.uke.childImageSharp.fixed} />
                      <span sx={{ ml: 3 }}> play the uke </span>
                    </h4>
                  </Fade>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          sx={{ mt: 4 }}
          css={css({
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
            height: "500px",
          })}
        >
          <div
            css={css({
              display: `flex`,
              alignItems: `center`,
            })}
          >
            <Fade left>
              <Img fixed={data.career.childImageSharp.fixed} />
            </Fade>
          </div>
          <div
            sx={{ mr: 6 }}
            css={css({
              height: "100%",
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
            })}
          >
            <Timeline />
          </div>
        </div>
        <div
          sx={{ mt: 4 }}
          css={css({
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
            height: "500px",
          })}
        >
          {" "}
          <div
            sx={{ mt: 4 }}
            css={css({
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              alignItems: `center`,
              height: "500px",
              width: `100%`,
            })}
          >
            <div
              css={css({
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                height: "100%",
                flex: 1,
              })}
            >
              <Fade left>
                <ContactButtons />
              </Fade>
            </div>
            <div
              sx={{ mr: 6, color: "primary" }}
              css={css({
                height: "100%",
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                textAlign: "left"
              })}
            >
              <Fade right>
                <Heading sx={{ fontSize: 6 }}>Contact me here</Heading>
                <br />
                <h4>
                  I'll gladly get in touch for any discussions, projects or
                  random subjects :)
                </h4>
              </Fade>
            </div>
          </div>
        </div>
      </HomeLayout>
    </React.Fragment>
  )
}

export default AboutMePage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutme/" } }) {
      edges {
        node {
          html
        }
      }
    }
    coding: file(relativePath: { eq: "coding.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dota: file(relativePath: { eq: "dota2.png" }) {
      childImageSharp {
        fixed(height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    uke: file(relativePath: { eq: "uke.png" }) {
      childImageSharp {
        fixed(height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    problem: file(relativePath: { eq: "problem.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    career: file(relativePath: { eq: "career.png" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
