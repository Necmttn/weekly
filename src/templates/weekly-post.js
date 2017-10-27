import React from 'react'

const WeeklyPostRoute = (props) => {
  const data = props.data.allTrelloBoard.edges[0].node
  console.log(props)
  const segments = data.lists.map(list => {
    const listId = list.id
    // get cards for this list
    const cards = data.cards.filter(card => {
      return card.parent === listId
    }).map(card => {
      return (
        <div>
          <h2>{card.name}</h2>
          <p>{card.desc}</p>
        </div>
      )
    })
    return (
      <div>
        <h1> {list.name} </h1>
        {cards}
      </div>
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
        name lists { id
          name
        }
        cards {
          id
          parent
          name
          desc
        }
      }
    }
  }
}
`;
