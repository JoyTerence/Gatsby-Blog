import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      height: 250
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: `10.45rem`,
        paddingBottom: `0.5rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <hr
      style={{
        maxWidth: 1000,
        margin: `0 auto`,
        height: 2,
        backgroundColor: `black`
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
