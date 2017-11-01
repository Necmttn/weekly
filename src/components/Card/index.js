import React from 'react'
import styled from "styled-components"

const Card = (props) => {
  const card = props.card
  const frontmatter = card.childMarkdownRemark.frontmatter
  const image = () => {
    if(frontmatter.image !== null) {
      return (
        <img src={frontmatter.image} />
      )
    } else {
      return
    }
  }
  return (
    <Container key={card.id}>
      <a href={frontmatter.link}>
        <Header>{card.name}</Header>
      </a>
      {image()}
      <Content dangerouslySetInnerHTML={{ __html: card.childMarkdownRemark.html }}>
      </Content>
    </Container>
  )
}


const Container = styled.div`
  background: #ffffff;
  margin-bottom: 20px;
  padding: 10px 5px;
  border-top: 5px dashed rgba(0, 0, 0, .1);
`

const Header = styled.h3`
  color: rgba(88, 110, 117, 1);
  font-weight: 400;
`

const Content = styled.div`
 padding-left: 10px;
 p {
  color: #073642;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 }
 h1,h2, h3, h4, li {
  color: rgba(88, 110, 117, 1);
 }
`

export default Card
