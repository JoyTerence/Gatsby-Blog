/** @jsx jsx */
import { jsx, css } from "theme-ui"

import React from "react"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import { IconContext } from "react-icons"
import { GiQuillInk, GiClick } from "react-icons/gi"
import { ImDownload } from "react-icons/im"
import { BsArrowReturnRight } from "react-icons/bs"

import Fade from "react-reveal/Fade"

import AnimatedButton from "../components/awesomebutton"

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <HomeLayout>
        <SEO
          title="Joy Barnes"
          keywords={[`portfolio`, `gatsby`, `application`, `react`]}
        />
        <div
          sx={{
            mt: ["100px", 6],
            ml: 2,
            mr: 2,
            fontWeight: "bold",
            fontSize: 4,
            color: "primary",
            overflowX: 'hidden',
          }}
        >
          <div
            css={css({
              display: `flex`,
              flexDirection: [`column-reverse`, `row`],
              justifyContent: `space-around`,
              height: ["450px", "400px"],
            })}
          >
            <div
              css={css({
                display: `flex`,
                flex: 1,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <span
                css={css({
                  textAlign: `center`,
                })}
                sx={{ fontSize: ["30px", 7] }}
              >
                Hello there!
              </span>
              <span
                css={css({
                  textAlign: `center`,
                })}
                sx={{ fontSize: [3, 5] }}
              >
                I'm {data.site.siteMetadata.name}
              </span>
              {data.site.siteMetadata.customTitle.map((text, index) => (
                <span
                  sx={{ fontSize: [2, 3] }}
                  key={index}
                  css={css({
                    display: `flex`,
                  })}
                >
                  {text}
                </span>
              ))}
              <div sx={{ p: 2 }} />
              <AnimatedButton fileDownload={false} url={"/about-me"}>
                <IconContext.Provider
                  value={{ style: { marginLeft: "10px" }, size: `2em` }}
                >
                  <GiClick />
                </IconContext.Provider>
              </AnimatedButton>
            </div>
            <div
              css={css({
                display: `flex`,
                flex: 1,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <img
                sx={{ width: "70%" }}
                src={data.feeling_proud.publicURL}
                alt="intro"
              />
            </div>
          </div>

          <div
            sx={{ mt: [5, 6] }}
            css={css({
              display: `flex`,
              flexDirection: [`column`, `row`],
              justifyContent: `space-around`,
              height: ["450px", "400px"],
            })}
          >
            <div
              css={css({
                display: `flex`,
                flex: 1,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <Fade left>
                <img
                  sx={{ width: "70%" }}
                  src={data.blog_post.publicURL}
                  alt="blog_post"
                />
              </Fade>
            </div>
            <div
              css={css({
                display: `flex`,
                flex: 1,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <Fade right>
                <p sx={{ fontSize: [3, 4] }}>Stuff I've written so far...</p>
                <AnimatedButton fileDownload={false} url="/blogs">
                  <IconContext.Provider
                    value={{ style: { marginLeft: "15px" }, size: `2em` }}
                  >
                    <GiQuillInk />
                  </IconContext.Provider>
                </AnimatedButton>
              </Fade>
            </div>
          </div>

          <div
            sx={{ mt: [4, 4] }}
            css={css({
              display: `flex`,
              flex: 1,
              flexDirection: [`column-reverse`, `row`],
              justifyContent: `space-around`,
              height: ["450px", "400px"],
            })}
          >
            <div
              css={css({
                display: `flex`,
                flex: 1,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
              })}
            >
              <Fade left>
                <p sx={{ fontSize: [3, 4] }}>Some of my works...</p>
                <AnimatedButton fileDownload={false} url="/projects">
                  <IconContext.Provider
                    value={{ style: { marginLeft: "15px" }, size: `2em` }}
                  >
                    <BsArrowReturnRight />
                  </IconContext.Provider>
                </AnimatedButton>
              </Fade>
            </div>

            <div
              css={css({
                display: `flex`,
                flex: 1,
                alignItems: `center`,
              })}
            >
              <Fade right>
                <img
                  sx={{ width: "70%" }}
                  src={data.coding.publicURL}
                  alt="projects"
                />
              </Fade>
            </div>
          </div>

          <div
            sx={{ mt: [4, 4] }}
            css={css({
              display: `flex`,
              flexDirection: [`column`, `row`],
              justifyContent: `space-around`,
              height: ["450px", "400px"],
            })}
          >
            <div
              css={css({
                display: `flex`,
                flex: 1,
                alignItems: `center`,
              })}
            >
              <Fade left>
                <img
                  sx={{ width: "70%" }}
                  src={data.resume.publicURL}
                  alt="resume"
                />
              </Fade>
            </div>
            <div
              css={css({
                display: `flex`,
                flex: 1,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
              })}
            >
              <Fade right>
                <p sx={{ fontSize: [3, 4] }}>Download my resume</p>
                <AnimatedButton
                  fileDownload={true}
                  url={data.site.siteMetadata.resumePath}
                >
                  <IconContext.Provider
                    value={{ style: { marginLeft: "10px" }, size: `2em` }}
                  >
                    <ImDownload />
                  </IconContext.Provider>
                </AnimatedButton>
              </Fade>
            </div>
          </div>
        </div>
      </HomeLayout>
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`
  query {
    feeling_proud: file(relativePath: { eq: "feeling_proud.svg" }) {
      publicURL
    }
    blog_post: file(relativePath: { eq: "blog_post.svg" }) {
      publicURL
    }
    coding: file(relativePath: { eq: "coding.svg" }) {
      publicURL
    }
    resume: file(relativePath: { eq: "resume.svg" }) {
      publicURL
    }
    site {
      siteMetadata {
        name
        customTitle
        resumePath
      }
    }
  }
`
