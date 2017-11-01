import React from 'react'
import Card from '../Card'
import styled from 'styled-components'
// a.k.a each list
const Segment = (props) => {
  const list = props.list
  const cards = list.cards.map(card => {
    return (
      <Card card={card} />
    )
  })
  return (
    <div key={list.id}>
      <SegmentHeader>
        {list.name}
      </SegmentHeader>
      {cards}
    </div>
  )
}


export default Segment

const Blue = `rgba(38, 139, 210, .1)`

const SegmentHeader = styled.h1`
  padding: 10px;
  border-top: 1px solid ${Blue};
  border-left: 1px solid ${Blue};
`
