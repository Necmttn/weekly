import React from 'react'
import Segment from '../components/Segment'

const WeeklyPostRoute = (props) => {
  const data = props.data.allTrelloBoard.edges[0].node
  console.log(props)
  const segments = data.lists.map(list => {
    return (
      <Segment list={list}/>
    )
  })
  return (
    <div>
      <h1> { data.name }</h1>
      {segments}
    </div>
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
            }
          }
        }
      }
    }
  }
}
`;
