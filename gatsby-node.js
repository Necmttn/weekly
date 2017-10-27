const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const weeklyPostTemplate = path.resolve(`src/templates/weekly-post.js`)
    resolve(
      graphql(
        `
        query {
          allTrelloBoard {
            edges {
              node {
                id
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create weekly for each Board
        result.data.allTrelloBoard.edges.forEach(({node}) => {
          const id = node.id
          createPage({
            path: `/weekly/${id}`,
            component: weeklyPostTemplate,
            context: {
              id,
            }
          })
        })
      })
    )
  })
}
