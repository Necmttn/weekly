import React from 'react'
import Card from '../Card'

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
      <h1> {list.name} </h1>
      {cards}
    </div>
  )
}


export default Segment

