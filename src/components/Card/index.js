import React from 'react'
import styled from "styled-components"

const Card = (props) => {
  const card = props.card
  return (
    <Container key={card.id}>
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
      <div dangerouslySetInnerHTML={{ __html: card.childMarkdownRemark.html }}>
      </div>
    </Container>
  )
}


const Container = styled.div`
  background: #ffffff;
  padding: 10px 0;
  margin-bottom: 20px;
  padding: 10px 5px;
  border: 1px solid pink;
`

export default Card
