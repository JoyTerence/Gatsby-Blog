/** @jsx jsx */
import { jsx, css } from "theme-ui"

import React from "react"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"
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
                flexDirection: `column`,
                alignItems: `center`,
              })}
            >
              <div>
                <p sx={{ fontSize: 8 }}>Hello there!</p>
                <p sx={{ fontSize: 5 }}>I'm {data.site.siteMetadata.name}</p>
                {data.site.siteMetadata.customTitle.map((text, index) => (
                  <span
                    key={index}
                    css={css({
                      display: `flex`,
                    })}
                  >
                    {text}
                  </span>
                ))}
                <AnimatedButton fileDownload={false} url={"/about-me"}>
                  <IconContext.Provider
                    value={{ style: { marginLeft: "10px" }, size: `2em` }}
                  >
                    <GiClick />
                  </IconContext.Provider>
                </AnimatedButton>
              </div>
            </div>
            <div
              css={css({
                display: `flex`,
                alignItems: `center`,
              })}
            >
              <Img fixed={data.feeling_proud.childImageSharp.fixed} />
            </div>
          </div>

          <div
            sx={{ mt: 6 }}
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
                alignItems: `center`,
              })}
            >
              <Img fixed={data.blog_post.childImageSharp.fixed} />
            </div>
            <div
              css={css({
                display: `flex`,
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
            sx={{ mt: 6 }}
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
                alignItems: `center`,
              })}
            >
              <Img fixed={data.activity.childImageSharp.fixed} />
            </div>
          </div>

          <div
            sx={{ mt: 6 }}
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
                alignItems: `center`,
              })}
            >
              <Img fixed={data.cv.childImageSharp.fixed} />
            </div>
            <div
              css={css({
                display: `flex`,
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
    feeling_proud: file(relativePath: { eq: "feeling_proud.png" }) {
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    blog_post: file(relativePath: { eq: "blog_post.png" }) {
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    activity: file(relativePath: { eq: "activity.png" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cv: file(relativePath: { eq: "cv.png" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
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
