import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Weekly = (props) => {
  const posts = props.data.allTrelloBoard.edges
  const list = posts.map(post => {
    return (
      <Item key={post.node.id}>
        <Link to={`/weekly/${post.node.id}`}>
          <h1 key={post.node.id}> {post.node.name} </h1>
        </Link>
      </Item>
   )
  })
  return (
    <div>
      <h1>Subscribe to Weekly </h1>
      <p>Every weekend we ship our editorialized take on this week in open source and software development. It's the email you need to read to not miss out. No spam!</p>
      <EmailInput type="text" placeholder="john@doe.hack"/>
      <List>
      {list}
      </List>
    </div>
  )
}

const EmailInput = styled.input`
  padding: 30px;
  font-size: 50pt;
`

const List = styled.ul`
  list-style: aliceblue;
`

const Item = styled.li`
  color: blue;
`


export const pageQuery = graphql` query archiveQuery{
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


export default Weekly
