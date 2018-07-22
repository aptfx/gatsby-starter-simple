/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  let { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  let { createPage } = actions
  let result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
  `)
   
   
   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogpost.js`),
      context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
        slug: node.fields.slug
      },
    })
  })
}