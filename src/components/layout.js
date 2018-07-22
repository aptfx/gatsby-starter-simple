import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.less"

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Mein Gatsby Blog" },
            { name: "keywords", content: "blog, gatsby" },
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          author={data.site.siteMetadata.author}
        />
        <div className="col-group container">{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
