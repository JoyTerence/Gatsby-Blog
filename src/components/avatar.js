import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profilepic.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const { url, altText, title } = props;
  const styles = {
    borderRadius: "50%",
    marginBottom: "10px",
  };

  if (url) {
    return <img style={styles} src={url} alt={altText} title={title} />;
  }

  return <Img style={styles} fixed={data.placeholderImage.childImageSharp.fixed} alt={altText} title={title} />;
}

export default Avatar;