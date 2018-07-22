import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function Raw({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export const BlogPostTemplate = ({ content, contentComponent, title }) => {
  let Content = contentComponent || Raw
  return (
    <div>
      <h1>{title}</h1>
      <Content html={content} />
    </div>
  )
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <BlogPostTemplate content={post.html} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
