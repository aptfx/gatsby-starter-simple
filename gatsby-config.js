module.exports = {
  siteMetadata: {
    title: 'Gatsby SimpleBlog',
    author: 'Jochen H. Schmidt'
  },
    plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography'      
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-sharp'
    ],
}
