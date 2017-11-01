import React from 'react'
import Segment from '../components/Segment'
import Weekly from '../layouts/weekly'

const WeeklyPostRoute = (props) => {
  const data = props.data.allTrelloBoard.edges[0].node
  return (
      <Weekly data={data} />
  )
}


export default WeeklyPostRoute
export const pageQuery = graphql`
query getWeeklyById($id: String!) {
  allTrelloBoard (
    filter: {
      id: {eq: $id}
    }
  ){
    edges {
      node {
        id
        name lists {
          id
          name
          cards {
            id
            name
            childMarkdownRemark {
              id
              html
              frontmatter {
                tags
                image
                link
              }
            }
          }
        }
      }
    }
  }
}
`;
