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
            mt: 6,
            ml: 2,
            mr: 2,
            fontWeight: "bold",
            fontSize: 4,
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
                flex: 1,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <p
                css={css({
                  textAlign: `center`,
                })}
                sx={{ fontSize: [5, 8] }}
              >
                Hello there!
              </p>
              <p
                css={css({
                  textAlign: `center`,
                })}
                sx={{ fontSize: [3, 7] }}
              >
                I'm {data.site.siteMetadata.name}
              </p>
              {data.site.siteMetadata.customTitle.map((text, index) => (
                <span
                  sx={{ fontSize: [3, 5] }}
                  key={index}
                  css={css({
                    display: `flex`,
                  })}
                >
                  {text}
                </span>
              ))}
              <br/> 
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
                height: "100%",
                width: "100%",
              })}
            >
              <img sx={{ width: "70%" }} src={data.feeling_proud.publicURL} alt="intro"/>
            </div>
          </div>

          <div
            sx={{ mt: [0, 6] }}
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
                flex: 1,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
            >
              <img sx={{ width: "70%" }} src={data.blog_post.publicURL} alt="blog_post"/>
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
              <p sx={{ fontSize: 5 }}>
                Click to check out the stuff that I write down
              </p>
              <AnimatedButton fileDownload={false} url="/blogs">
                <IconContext.Provider
                  value={{ style: { marginLeft: "15px" }, size: `2em` }}
                >
                  <GiQuillInk />
                </IconContext.Provider>
              </AnimatedButton>
            </div>
          </div>

          <div
            sx={{ mt: [0, 6] }}
            css={css({
              display: `flex`,
              flex: 1,
              flexDirection: `row`,
              justifyContent: `space-around`,
              height: "500px",
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
              <p sx={{ fontSize: 5 }}>What I have done so far..</p>
              <AnimatedButton fileDownload={false} url="/projects">
                <IconContext.Provider
                  value={{ style: { marginLeft: "15px" }, size: `2em` }}
                >
                  <BsArrowReturnRight />
                </IconContext.Provider>
              </AnimatedButton>
            </div>

            <div
              css={css({
                display: `flex`,
                flex: 1,
                alignItems: `center`,
              })}
            >
              <img sx={{ width: "70%" }} src={data.activity.publicURL} alt="projects"/>
            </div>
          </div>

          <div
            sx={{ mt: [0, 6] }}
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
                flex: 1,
                alignItems: `center`,
              })}
            >
              <img sx={{ width: "70%" }} src={data.resume.publicURL} alt="resume"/>
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
              <p sx={{ fontSize: 5 }}>Download my resume</p>
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
    activity: file(relativePath: { eq: "activity.svg" }) {
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
