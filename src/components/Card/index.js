import React from 'react'
import styled from "styled-components"

const Card = (props) => {
  const data = props.data
  return (
    <Container key={data.id}>
      <h2>{data.name}</h2>
      <p>{data.desc}</p>
    </Container>
  )
}


const Container = styled.div`
  background: #d5e9f5;
  padding: 10px 0;
`

export default Card
