
import React from 'react'
import Link from 'gatsby-link'

const Archive = (props) => {
  console.log(props)
  const posts = props.data.allTrelloBoard.edges
  const list = posts.map(post => {
    return (
      <li>
        <h1 key={post.node.id}> {post.node.name} </h1>
      </li>
   )
  })
  return(
    <div>
      weekly is a place for programmers of all backgrounds to learn and share ideas.
      don't forget to subscribe our weekly mail.
      <ul>
        {list}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query archiveQuery{
    allTrelloBoard{
      edges {
        node{
          id
          name
        }
      }
    }
  }
`;



export default Archive
