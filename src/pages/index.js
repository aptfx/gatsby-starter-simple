import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostEntry from "../components/postentry"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          totalCount
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => !!node.frontmatter.date)
          .map(({ node, index }) => (
            <PostEntry
              key={node.id}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.fields.slug}
              title={node.frontmatter.title}
            />
          ))}
      </Layout>
    )}
  />
)

export default IndexPage
