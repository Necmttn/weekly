module.exports = {
  siteMetadata: {
    title: `Weekly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     {
       resolve: 'gatsby-source-trello',
       options: {
         teamId: `thebaseweekly`,
         apiKey: process.env.TRELLO_KEY,
         secret: process.env.TRELLO_SECRET
       }
     },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    // TODO: it's not works with trello
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyForNull: 'any',
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: false,
    //     markdownRemark: {
    //       postPage: 'src/templates/blog-post.js',
    //       query: `
    //       {
    //           allMarkdownRemark {
    //               edges {
    //               node {
    //                   fields {
    //                   slug,
    //                   langKey
    //                   }
    //               }
    //               }
    //           }
    //       }
    //       `
    //     }
    //   }
    // },
    `gatsby-plugin-styled-components`
  ],
}
